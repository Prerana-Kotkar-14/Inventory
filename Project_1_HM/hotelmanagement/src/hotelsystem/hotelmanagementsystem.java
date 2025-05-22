package hotelsystem;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class hotelmanagementsystem extends JFrame implements ActionListener{
    
    hotelmanagementsystem()
    {
        // setSize(1366,565);  // frame size
        //or
        setBounds(100,100,1366,565);

        ImageIcon i1 = new ImageIcon(ClassLoader.getSystemResource("icons/first.jpg"));
        JLabel image = new JLabel(i1);
        image.setBounds(0,0,1366,565);           //location x,location y,length,breadth
        add(image);

        JLabel text = new JLabel("HOTEL MANAGEMENT SYSTEM"); // will write this
        text.setBounds(20,430,1000,50);  // tx not get added until this
        text.setForeground(Color.white);
        text.setFont(new Font("times new roman",Font.PLAIN,50));
        image.add(text);                                    //will add text on image

        // for button next page
        JButton next = new JButton("Next");
        next.setBounds(1150,450,150,50);
        next.setBackground(Color.WHITE);
        next.setForeground(Color.ORANGE);
        next.addActionListener(this);
        next.setFont(new Font("serif",Font.PLAIN,24));
        image.add(next);

        setVisible(true);            // visible or not

        while(true)
        {
            text.setVisible(false);
            try{
                Thread.sleep(500);
            } catch(Exception e)
            {
                e.printStackTrace();
            }
            text.setVisible(true);

            try{
                Thread.sleep(500);
            } catch(Exception e)
            {
                e.printStackTrace();
            }
        }
    }

    public void actionPerformed(ActionEvent e){
        setVisible(false);
        new login();
    }
    public static void main(String args[])
    {
        new hotelmanagementsystem();
    }
}
