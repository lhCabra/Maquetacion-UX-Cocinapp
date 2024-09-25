package com.example.cocinapp

import android.content.Intent
import android.content.res.ColorStateList
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.View
import android.widget.ImageView
import android.widget.RelativeLayout
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.navigateUp
import com.example.cocinapp.databinding.ActivityStartRecipeBinding

class StartRecipeActivity : AppCompatActivity() {

    private lateinit var appBarConfiguration: AppBarConfiguration
    private lateinit var binding: ActivityStartRecipeBinding
    private var continueClickCount = 0
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityStartRecipeBinding.inflate(layoutInflater)
        setContentView(R.layout.activity_start_recipe)
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
        val textView = findViewById<TextView>(R.id.pausedtext)
        val alarmText = findViewById<TextView>(R.id.alarm_name)
        val timerText = findViewById<TextView>(R.id.timertext)
        val alarmNumber = findViewById<TextView>(R.id.alarm_number)
        val pauseButton = findViewById<RelativeLayout>(R.id.pausebutton)
        val pauseText = findViewById<TextView>(R.id.pause)
        val iconPause = findViewById<ImageView>(R.id.icon_pause)
        val continueButton = findViewById<RelativeLayout>(R.id.continue_button)

        pauseButton.setOnClickListener {
            pauseButton.setBackgroundResource(R.drawable.extended_fa)
            pauseText.setTextColor(ContextCompat.getColor(this, R.color.table_rows))

            val handler = Handler(Looper.getMainLooper())

            if (textView.visibility != View.VISIBLE) {
                iconPause.setImageResource(R.drawable.pause_clicked)

                handler.postDelayed({
                   pauseButton.setBackgroundResource(R.drawable.pausebkground)
                    pauseText.setTextColor(ContextCompat.getColor(this, R.color.primary))

                    textView.visibility = View.VISIBLE
                    pauseText.text = getString(R.string.reanudar)
                    iconPause.setImageResource(R.drawable.play_arrow_button)
                }, 120)

            } else {
                iconPause.setImageResource(R.drawable.play_clicked_recipe)

                handler.postDelayed({
                   pauseButton.setBackgroundResource(R.drawable.pausebkground)
                    pauseText.setTextColor(ContextCompat.getColor(this, R.color.primary))

                    textView.visibility = View.INVISIBLE
                    pauseText.text = getString(R.string.pausar)
                    iconPause.setImageResource(R.drawable.pause)
                }, 120)
            }
        }

        continueButton.setOnClickListener {
            continueClickCount++
            textView.visibility = View.INVISIBLE
            continueButton.setBackgroundResource(R.drawable.start_clicked)

            val handler = Handler(Looper.getMainLooper())

            handler.postDelayed({
                if (continueClickCount == 1) {
                    alarmText.text = getString(R.string.freir_salchichas)
                    alarmNumber.text = "2/2"
                    timerText.text = getString(R.string._00_18_00)
                    continueButton.setBackgroundResource(R.drawable.extended_fa)
                } else if (continueClickCount == 2) {
                    val intent = Intent(this, EndRecipeActivity::class.java)
                    startActivity(intent)
                }
            }, 120)
        }
    }

    override fun onSupportNavigateUp(): Boolean {
        val navController = findNavController(R.id.nav_host_fragment_content_instructions)
        return navController.navigateUp(appBarConfiguration)
                || super.onSupportNavigateUp()
    }
}