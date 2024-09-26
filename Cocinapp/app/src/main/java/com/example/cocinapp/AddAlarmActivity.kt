package com.example.cocinapp

import android.content.Intent
import android.content.res.ColorStateList
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.View
import android.widget.EditText
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
        val errorMsg=findViewById<TextView>(R.id.textView8)
        val editText = findViewById<EditText>(R.id.editTextText2)

        addBtn.setOnClickListener {
            val inputText = editText.text.toString().trim()
            val handler = Handler(Looper.getMainLooper())

            addBtn.setBackgroundResource(R.drawable.start_clicked)
            handler.postDelayed({
            if (inputText.isEmpty()) {
                errorMsg.visibility = View.VISIBLE
                addBtn.setBackgroundResource(R.drawable.extended_fa)


            } else {

                val intent = Intent(this, MainActivity::class.java)
                startActivity(intent)
            }
            }, 120)
              }

    }
}