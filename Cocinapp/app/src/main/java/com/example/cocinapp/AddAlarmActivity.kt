package com.example.cocinapp

import android.content.Intent
import android.content.res.ColorStateList
import android.os.Bundle
import android.widget.ImageView
import android.widget.RelativeLayout
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class AddAlarmActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_add_alarm)
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

        val addBtn=findViewById<RelativeLayout>(R.id.continue_button)
        addBtn.setOnClickListener {
            addBtn.setBackgroundResource(R.drawable.start_clicked)
            val intent= Intent(this,MainActivity::class.java)
            startActivity(intent)
        }
    }
}