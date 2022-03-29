package com.springPractice.springPractice.DataBaseOperation.Controller;

import org.springframework.context.annotation.Configuration;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Configuration
public class CreateConnection2 {
    public Connection createConnection() throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/testdb?user=root&password=indira");
        return conn;
    }
}
