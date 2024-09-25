package com.example.cocinapp

import android.content.Intent
import android.content.res.ColorStateList
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import android.view.Menu
import android.view.MenuItem
import android.widget.ImageView
import android.widget.RelativeLayout
import androidx.cardview.widget.CardView
import androidx.core.content.ContextCompat
import com.example.cocinapp.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        val play=findViewById<CardView>(R.id.button_play)
        val icon=findViewById<ImageView>(R.id.icon_play)
        play.setOnClickListener {
            val intent=Intent(this,InstructionsActivity::class.java)
            icon.setImageResource(R.drawable.play_clicked)
            play.backgroundTintList = ColorStateList.valueOf(ContextCompat.getColor(this,R.color.primary))
            startActivity(intent)
        }
        val iconAdd=findViewById<ImageView>(R.id.icon_add)
        iconAdd.setOnClickListener {
            val intent=Intent(this,AddAlarmActivity::class.java)
            startActivity(intent)
        }

        val shareBtn=findViewById<RelativeLayout>(R.id.extended_fa)
        shareBtn.setOnClickListener {
            val intent=Intent(this,ShareRecipeActivity::class.java)
            startActivity(intent)
        }
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        // Inflate the menu; this adds items to the action bar if it is present.
        menuInflater.inflate(R.menu.menu_main, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        // Handle action bar item clicks here.
        return when (item.itemId) {
            R.id.action_settings -> true
            else -> super.onOptionsItemSelected(item)
        }
    }

    override fun onSupportNavigateUp(): Boolean {
        return  super.onSupportNavigateUp()
    }
}