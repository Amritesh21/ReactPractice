package com.springPractice.springPractice.DataBaseOperation.Controller;

import com.springPractice.springPractice.DataBaseOperation.POJOdb.UserDb;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.crypto.Data;
import java.sql.*;


@RestController
public class DataController {

    Logger logger = LoggerFactory.getLogger(DataController.class);

    @Autowired
    CreateConnection connection;

    @Autowired
    CreateConnection2 connection2;

    @GetMapping("user/fetch2")
    public String getUserDetails(UserDb userDb) throws SQLException {
        StringBuilder stb = new StringBuilder("");
        String query = "Select * from user";
        try(Statement stmt = connection2.createConnection().createStatement()){
            ResultSet resultSet = stmt.executeQuery(query);
            while(resultSet.next()){
                stb.append(resultSet.getString("uuid"));
                stb.append(" ");
                stb.append(resultSet.getString("name"));
                stb.append(" ");
                stb.append(resultSet.getInt("age"));
                stb.append("\n");
            }
        }
        return stb.toString();
    }

    @PostMapping("user/add")
    public UserDb addUser(@RequestBody UserDb user){
        try {
            logger.info(String.valueOf(connection.getConnection()));
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return user;
    }

    @GetMapping("user/fetch")
    public void getUser(){
        String query = "select * from user";
        try (Statement stmt = connection.getConnection().createStatement()) {
            ResultSet rs = stmt.executeQuery(query);
            while (rs.next()) {
                String uuid = rs.getString("uuid");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                logger.info(uuid+" "+name+" "+age);
            }
        } catch (SQLException e) {

        }
    }

    @PostMapping("user/add2")
    public void addNewUser(@RequestBody UserDb userDb) throws SQLException {
        logger.info(userDb.getUuid());
        String addQuery = "insert into user values(?,?,?)";
        Connection connectionTemp = connection2.createConnection();
        try(PreparedStatement addUser1 = connectionTemp.prepareStatement(addQuery)){
            addUser1.setString(1,userDb.getUuid().substring(0,9));
            addUser1.setString(2, userDb.getName());
            addUser1.setInt(3, Integer.parseInt(userDb.getAge()));
            boolean valueReturnedExecute = addUser1.execute(); // returns boolean value indicating whether statement returned resultset
            logger.info(Boolean.toString(valueReturnedExecute));
            //addUser1.executeUpdate(); // returns no of rows affected
            // with ddl commands it will return 0;
            //addUser1.executeQuery(); // returns result set containing all rows
        }catch (Exception e){
            logger.info(e.toString());
        }
        connectionTemp.close();

        try(PreparedStatement statement = connection2.createConnection().prepareStatement("select * from user")){
            boolean returnedValue = statement.execute(); // as we used execute with select so it returned true as select returnes value
            // whereas with update or delete it doesnot return true as it not returns any data
            logger.info(Boolean.toString(returnedValue));
        }
    }

    @PostMapping("user/batchOp")
    public void performBatchOperation() throws SQLException {
        Connection connection = connection2.createConnection();

        /*
        This means that only commands that return an update count (commands such as INSERT INTO, UPDATE, DELETE) or that return 0
         (such as CREATE TABLE, DROP TABLE, ALTER TABLE) can be successfully executed as a batch with the executeBatch method.
         */
        try(PreparedStatement preparedStatement = connection.prepareStatement("insert into courses values(?,?)")){
            preparedStatement.setString(1,"Maths");
            preparedStatement.setInt(2,1);
            preparedStatement.addBatch();

            preparedStatement.setString(1,"Computer Science");
            preparedStatement.setInt(2,2);
            preparedStatement.addBatch();

            preparedStatement.setString(1,"Science");
            preparedStatement.setInt(2,3);
            preparedStatement.addBatch();

            int [] updateCount = preparedStatement.executeBatch();

            for(int i : updateCount){
                logger.info("value of batch : "+ i);
            }
        }
    }

    @PostMapping("user/transaction")
    public void performTransaction() throws SQLException{

        Connection conn = connection2.createConnection();
        try( PreparedStatement preparedStatement = conn.prepareStatement("update courses set coursename = ? where id = ?");
             PreparedStatement preparedStatement1 = conn.prepareStatement("update user set name = ? where name = ?")) {
            conn.setAutoCommit(false);
            // PreparedStatement preparedStatement = conn.prepareStatement("update courses set coursename = ? where id = ?");
            preparedStatement.setString(1, "Maths");
            preparedStatement.setInt(2, 1);
            int val1 = preparedStatement.executeUpdate();
            logger.info(Integer.toString(val1));

            // PreparedStatement preparedStatement1 = conn.prepareStatement("update user set name = ? where name = ?");
            preparedStatement1.setString(1, "Amritesh singh");
            preparedStatement1.setString(2, "amritesh");
            int val2 = preparedStatement1.executeUpdate();
            logger.info(Integer.toString(val2));

            conn.commit();
            conn.setAutoCommit(true);
        }
        conn.close();
    }



}
