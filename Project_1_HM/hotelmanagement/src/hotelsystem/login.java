package hotelsystem;

import java.awt.Color;
import java.awt.Image;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

public class login extends JFrame {
    
    login(){

        getContentPane().setBackground(Color.WHITE);

        setLayout(null);
        JLabel user = new JLabel("Username");
        user.setBounds(40,20,100,30);
        add(user);

        JTextField username = new JTextField();
        username.setBounds(150,20,100,30);
        add(username);

        JLabel pass = new JLabel("Password");
        pass.setBounds(40,70,100,30);
        add(pass);

        JTextField password = new JTextField();
        password.setBounds(150,70,100,30);
        add(password);

        JButton login = new JButton("Login");
        login.setBounds(40,150,120,30);
        login.setBackground(Color.black);
        login.setForeground(Color.white);
        add(login);
        
        JButton Cancel = new JButton("Cancel");
        Cancel.setBounds(180,150,120,30);
        Cancel.setBackground(Color.black);
        Cancel.setForeground(Color.white);
        add(Cancel);

        ImageIcon i1 = new ImageIcon(ClassLoader.getSystemResource("icons/second.jpg"));
        Image i2 = i1.getImage().getScaledInstance(200, 200, Image.SCALE_DEFAULT);

        ImageIcon i3= new ImageIcon(i2);
        JLabel image = new JLabel(i3);
        image.setBounds(350,10,200,200);
        add(image);

        setBounds(500,200,600,300);
        setVisible(true);
    }

    public static void main(String[] args) {
        new login();
    }
}
