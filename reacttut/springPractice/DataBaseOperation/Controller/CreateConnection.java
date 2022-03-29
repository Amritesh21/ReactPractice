package com.springPractice.springPractice.DataBaseOperation.Controller;

import org.springframework.context.annotation.Configuration;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

@Configuration
public class CreateConnection {
    private String dbms;

    public Connection getConnection() throws SQLException {

        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/testdb?" +
                    "user=root&password=indira");
        System.out.println("Connected to database");
        return conn;
    }
}
