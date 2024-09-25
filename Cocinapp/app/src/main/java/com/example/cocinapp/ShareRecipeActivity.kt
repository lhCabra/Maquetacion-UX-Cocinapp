package com.example.cocinapp

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.content.Intent
import android.content.res.ColorStateList
import android.os.Bundle
import android.widget.ImageView
import android.widget.RelativeLayout
import android.widget.TextView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class ShareRecipeActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_share_recipe)
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

        val shareButton: RelativeLayout = findViewById(R.id.continue_button)

        shareButton.setOnClickListener {
            shareButton.setBackgroundResource(R.drawable.start_clicked)
            val clipboard = getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
            val clip = ClipData.newPlainText("Copied URL", "https://urlReceta.com")
            clipboard.setPrimaryClip(clip)
            Toast.makeText(this, "url copiada en portapapeles", Toast.LENGTH_SHORT).show()
            shareButton.setBackgroundResource(R.drawable.extended_fa)
        }
    }
}