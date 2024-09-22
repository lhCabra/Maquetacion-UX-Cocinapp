package com.example.cocinapp

import android.content.Intent
import android.content.res.ColorStateList
import android.os.Bundle
import android.widget.ImageView
import android.widget.RelativeLayout
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.navigateUp
import com.example.cocinapp.databinding.ActivityInstructionsBinding

class InstructionsActivity : AppCompatActivity() {

    private lateinit var appBarConfiguration: AppBarConfiguration
    private lateinit var binding: ActivityInstructionsBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityInstructionsBinding.inflate(layoutInflater)
        setContentView(R.layout.activity_instructions)
        val back=findViewById<RelativeLayout>(R.id.button_back)
        val textBack=findViewById<TextView>(R.id.text_volver)
        val iconBack=findViewById<ImageView>(R.id.icon_back)
        back.setOnClickListener {
            back.backgroundTintList = ColorStateList.valueOf(ContextCompat.getColor(this,R.color.primary))
            textBack.setTextColor(ContextCompat.getColor(this, R.color.table_rows))
            iconBack.setBackgroundResource(R.drawable.icon_back_clicked)
            val intent= Intent(this,MainActivity::class.java)
            startActivity(intent)
        }
        val play=findViewById<RelativeLayout>(R.id.start)
        play.setOnClickListener {
            play.setBackgroundResource(R.drawable.start_clicked)
            val intent=Intent(this,StartRecipeActivity::class.java)
            startActivity(intent)
        }
    }

    override fun onSupportNavigateUp(): Boolean {
        val navController = findNavController(R.id.nav_host_fragment_content_instructions)
        return navController.navigateUp(appBarConfiguration)
                || super.onSupportNavigateUp()
    }
}