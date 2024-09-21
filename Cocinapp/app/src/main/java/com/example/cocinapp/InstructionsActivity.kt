package com.example.cocinapp

import android.content.Intent
import android.os.Bundle
import android.widget.RelativeLayout
import androidx.appcompat.app.AppCompatActivity
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
        back.setOnClickListener {
            val intent=Intent(this,MainActivity::class.java)
            startActivity(intent)
        }
        val play=findViewById<RelativeLayout>(R.id.start)
        play.setOnClickListener {
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