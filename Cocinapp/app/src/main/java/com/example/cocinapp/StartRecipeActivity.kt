package com.example.cocinapp

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.ImageView
import android.widget.RelativeLayout
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.marginLeft
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.navigateUp
import com.example.cocinapp.databinding.ActivityInstructionsBinding
import com.example.cocinapp.databinding.ActivityStartRecipeBinding

class StartRecipeActivity : AppCompatActivity() {

    private lateinit var appBarConfiguration: AppBarConfiguration
    private lateinit var binding: ActivityStartRecipeBinding
    private var continueClickCount = 0
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityStartRecipeBinding.inflate(layoutInflater)
        setContentView(R.layout.activity_start_recipe)
        val play=findViewById<RelativeLayout>(R.id.button_back)
        play.setOnClickListener {
            val intent= Intent(this,MainActivity::class.java)
            startActivity(intent)
        }
        val textView = findViewById<TextView>(R.id.pausedtext)
        val alarmText = findViewById<TextView>(R.id.alarm_name)
        val timerText = findViewById<TextView>(R.id.timertext)
        val alarmNumber = findViewById<TextView>(R.id.alarm_number)
        val pauseButton = findViewById<RelativeLayout>(R.id.pausebutton)
        val pauseText = findViewById<TextView>(R.id.pause)
        val iconPause = findViewById<ImageView>(R.id.icon_pause)
        val continueButton = findViewById<RelativeLayout>(R.id.continue_button)

        pauseButton.setOnClickListener {
            if( textView.visibility != View.VISIBLE) {
                textView.visibility = View.VISIBLE
                pauseText.text = "Reanudar"
                iconPause.setImageResource(R.drawable.play_arrow_button)
            }
            else{
                textView.visibility = View.INVISIBLE
                pauseText.text = "Pausar"
                iconPause.setImageResource(R.drawable.pause)
            }
        }
        continueButton.setOnClickListener {
            continueClickCount++
            textView.visibility = View.INVISIBLE

            if (continueClickCount == 1) {
                alarmText.text = "Freir salchichas"
                alarmNumber.text = "2/2"
                timerText.text = "00:18:00"
            } else if (continueClickCount == 2) {
                val intent=Intent(this,InstructionsActivity::class.java)
                startActivity(intent)
            }
        }
    }

    override fun onSupportNavigateUp(): Boolean {
        val navController = findNavController(R.id.nav_host_fragment_content_instructions)
        return navController.navigateUp(appBarConfiguration)
                || super.onSupportNavigateUp()
    }
}