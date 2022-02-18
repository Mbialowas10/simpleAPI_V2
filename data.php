<?php
  // establish a database connection
  try {
    $pdo = new PDO('mysql:host=localhost;dbname=miniProject','mike','pa33word');
  }
  catch (PDOException $e)
  {

    print "Exception thrown: " . $e->getMessage() . "<br/>";
    die();
  }

  $stmt = $pdo->prepare("SELECT * FROM demographics");
  $stmt->execute();

  $rows = $stmt->fetchAll();
  //print_r($rows);
  $temp = [];
  $idx = 0;

  foreach( $rows as $row  ){

    // echo $row['name'];
    // echo $row['email'];
    // echo $row['browser'];
    // echo "<br>";
    //echo "$row = $val<br>";

    //$temp[$idx] = [ $row['name'],' ', $row['email'], ' ', $row['browser'] ];

    $idx++;

  }

  echo json_encode($rows);


?>