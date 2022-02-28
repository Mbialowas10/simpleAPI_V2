<?php
/*
 * Seeds.php
 * Purpose: create some fake and insert in into
 * MySQL database
 */


// establish a database connection
try {
  $pdo = new PDO('mysql:host=localhost;dbname=miniProject','mike','pa33word');
}
catch (PDOException $e)
{

  print "Exception thrown: " . $e->getMessage() . "<br/>";
  die();
}

require('vendor/autoload.php');

// create faker instance
$faker = Faker\Factory::create();

// variables
$address;
$company;
$domain;
$email;
$imageURL;
$jobTitle;
$name;
$password;
$phone;
$userAgent;
$userName;



// // drop existing data in miniproject.demograhics table each time seeds script is run
$sql = "DELETE FROM demographics";
$pdo->query($sql);


// INSERT INTO api(name,email,browser) values name,email, browser;
for ($i=0; $i< 250;$i++){

  $name = $faker -> name();
  $city = $faker -> city();
  $address = $faker -> address();
  $phoneNumber = $faker -> phoneNumber();
  $company = $faker -> company();
  $jobTitle = $faker -> jobTitle();
  $email = $faker -> email();
  $userName = $faker -> userName();
  $password = $faker -> password();
  $domain = $faker -> domainName();
  $userAgent = $faker -> userAgent();
  $imageURL = $faker-> imageUrl(75, 75, 'avatar', true, 'avatar');


  //INSERT INTO `data` (`id`, `name`, `email`, `browser`) VALUES (NULL, 'Test', 'test@test.com', 'chrome');
  //$sql="INSERT INTO `data`(`id`, `name`, `email`, `browser`) VALUES(null, '${name}', '${email}', '${browser}' )";

  $sql = "INSERT INTO `demographics`(`id`, `name`, `address`, `phone`, `company`, `jobTitle`,
                `email`, `userName`, `password`, `domain`, `userAgent`, `imageURL`)
                VALUES (NULL,'${name}','${email}','${phoneNumber}','${company}',
                '${jobTitle}','${email}','${userName}','${password}','${domain}','${userAgent}'
                ,'${imageURL}')";

  if ($pdo->query($sql) == TRUE)
  {
    echo "New record inserted successfully<br>";
  }else
  {
    echo "Error: " . $sql . "<br>";
  }
}

// test faker to see if it pulls data
// echo $faker -> name();
// echo $faker -> city();
// echo $faker -> address();
// echo $faker -> phoneNumber();
// echo $faker -> company();
// echo $faker -> jobTitle();
// echo $faker -> email();
// echo $faker -> userName();
// echo $faker -> password();
// echo $faker -> domainName();
// echo $faker -> userAgent();
// echo $faker->imageUrl();



// echo $faker->name() . "\n";
// echo $faker->name('male') . "\n";
// echo $faker->name('female') . "\n";

// echo $faker->firstName() . "\n";
// echo $faker->firstName($gender='male') . "\n";
// echo $faker->firstName($gender='female') . "\n";

// echo $faker->firstNameMale('female') . "\n";
// echo $faker->firstNameFemale('female') . "\n";

// echo $faker->lastName() . "\n";