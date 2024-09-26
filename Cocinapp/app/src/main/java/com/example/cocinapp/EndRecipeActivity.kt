package com.example.cocinapp

import android.content.Intent
import android.content.res.ColorStateList
import android.os.Bundle
import android.widget.ImageView
import android.widget.RelativeLayout
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class EndRecipeActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_end_recipe)
        val finishBtn=findViewById<RelativeLayout>(R.id.finish_button)
        finishBtn.setOnClickListener {
            finishBtn.setBackgroundResource(R.drawable.start_clicked)
            val intent= Intent(this,MainActivity::class.java)
            startActivity(intent)
        }
    }
}