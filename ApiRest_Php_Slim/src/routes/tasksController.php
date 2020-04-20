<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

// List tasks

$app->get('/api/tasks/listtasks/', function(Request $request, Response $response){
    
    $sql = "SELECT * FROM tasks";
    try{
        $db = new db();
        $db = $db->conecctiondb();
        $result = $db->query($sql);
        if($result->rowCount() > 0){
            $tasks = $result->fetchAll(PDO::FETCH_OBJ);
                echo json_encode($tasks);
        }else{
            echo json_encode("There are no tasks in the database");
        }
        $result = null;
        $db = null;
    }catch(PDOException $e){
        echo '{"error" : {"text":'.$e->getMassage().'}';
    }
});

// POST to create a new task

$app->post('/api/tasks/addtasks/', function(Request $request, Response $response){
    $task = $request->getParam('task');
    $dates = $request->getParam('dates');

    $sql = "INSERT INTO tasks (task, dates) VALUES
            (:task, :dates)"; 
    try{
        $db = new db();
        $db = $db->conecctiondb();
        $result = $db->prepare($sql);

        $result->bindParam(':task', $task);
        $result->bindParam(':dates', $dates);
        
        $result->execute();
        
        echo json_encode("Task added successfully");

        $result = null;
        $db = null;
    }catch(PDOException $e){
        echo '{"error" : {"text":'.$e->getMassage().'}';
    }
});

// PUT update task.

$app->put('/api/tasks/updatetask/{id}', function(Request $request, Response $response){
    $id_task = $request->getAttribute('id');
    
    $task = $request->getParam('task');
    $dates = $request->getParam('dates');
    
       
    
    $sql = "UPDATE tasks SET
            task = :task,
            dates = :dates
            WHERE  id = $id_task";
    
    try{
        $db = new db();
        $db = $db->conecctiondb();
        $result = $db->prepare($sql);

        $result->bindParam(':task', $task);
        $result->bindParam(':dates', $dates);

        $result->execute();
        
        echo json_encode("Task updated successfully");


        $result = null;
        $db = null;
    }catch(PDOException $e){
        echo '{"error" : {"text":'.$e->getMassage().'}';
    }
});
// DELETE para ELIMINAR UN CLIENTE

$app->delete('/api/tasks/deletetask/{id}', function(Request $request, Response $response){
    $id_task = $request->getAttribute('id');
    $sql = "DELETE FROM tasks WHERE  id = $id_task";
    
    try{
        $db = new db();
        $db = $db->conecctiondb();
        $result = $db->prepare($sql);
        $result->execute();
        
        if($result->rowCount() > 0){
            echo json_encode("Task deleted successfully");
        }else{
            echo json_encode("There are no tasks with this id");
        }
       
        $result = null;
        $db = null;
    }catch(PDOException $e){
        echo '{"error" : {"text":'.$e->getMassage().'}';
    }
});