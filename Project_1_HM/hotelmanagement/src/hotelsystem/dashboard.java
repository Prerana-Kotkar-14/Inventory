package hotelsystem;

import java.awt.Color;
import java.awt.Font;
import java.awt.Image;

import javax.imageio.ImageIO;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;

public class dashboard extends JFrame{
    
    dashboard()
    {
        setBounds(0,0,1550,1000);
        setLayout(null);;

        ImageIcon i1 = new ImageIcon(ClassLoader.getSystemResource("icons/third.jpg"));
        Image i2 = i1.getImage().getScaledInstance(1550,1000,Image.SCALE_DEFAULT);
        ImageIcon i3 = new ImageIcon(i2);
        JLabel image = new JLabel(i3);
        image.setBounds(0,0,1550,1000);
        add(image);

        JLabel text = new JLabel("The Taj Welcomes You");
        text.setBounds(400,80,1000,50);
        text.setFont(new Font("Tahoma", Font.PLAIN,50));
        text.setForeground(Color.WHITE);
        image.add(text);

        JMenuBar mb = new JMenuBar();
        mb.setBounds(0,0,1550,30);
        image.add(mb);

        JMenu hotel = new JMenu("Hotel Management");
        hotel.setForeground(Color.RED);
        mb.add(hotel);

        JMenuItem reception = new JMenuItem("Reception");
        hotel.add(reception);

        JMenu Admin = new JMenu("Admin");
        Admin.setForeground(Color.BLUE);
        mb.add(Admin);

        JMenuItem addrooms = new JMenuItem("Add Rooms");
        Admin.add(addrooms);

        JMenuItem addDrivers = new JMenuItem("Add Drivers");
        Admin.add(addDrivers);

        JMenuItem addEmployee = new JMenuItem("Add Employee");
        Admin.add(addEmployee);


        setVisible(true);

    }

    public static void main(String[] args) {
        new dashboard();
    }
}
