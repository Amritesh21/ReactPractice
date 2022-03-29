package com.springPractice.springPractice.SpringJdbc;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.batch.BatchProperties;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.SingleConnectionDataSource;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;

@RestController
public class SpringJdbcController {

    /*
        Note :- spring.datasource.url=jdbc:mysql://localhost:3306/testdb
        must be added to application.properties file
     */

    Logger logger = LoggerFactory.getLogger(SpringJdbcController.class);

    @PostMapping("springjdbc/insert")
    public void insertData(@RequestBody Course course) throws SQLException {
        String query = "insert into courses values (?,?)";
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/testdb?user=root&password=indira");
        JdbcTemplate jdbcTemplate =  new JdbcTemplate(new SingleConnectionDataSource(conn,false));
        int val = jdbcTemplate.update(query, course.getCoursename(), course.getId());
        logger.info(Integer.toString(val));
    }

    @PostMapping("springjdbc/update")
    public void updateData(@RequestParam String oldCourse, @RequestParam String newCourse) throws SQLException{
        String query = "update courses set coursename = ? where coursename = ?";
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/testdb?user=root&password=indira");
        JdbcTemplate jdbcTemplate = new JdbcTemplate(new SingleConnectionDataSource(conn,false));
        int val = jdbcTemplate.update(query, newCourse, oldCourse);
        logger.info(Integer.toString(val));
    }

    @GetMapping("springjdbc/get")
    public List<Course> getData() throws SQLException {
        String query = "select * from courses";
        /*
            cannot handle queries like :- select * from courses where coursename = ?
         */
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/testdb?user=root&password=indira");
        JdbcTemplate jdbcTemplate = new JdbcTemplate(new SingleConnectionDataSource(conn,false));
        return jdbcTemplate.query(query, new BeanPropertyRowMapper<Course>(Course.class));
    }

}
