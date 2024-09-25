<?php
// Ukraine host db
// $host = 'tkachyk.mysql.tools';
// $db_name = 'tkachyk_soloway';
// $username = 'tkachyk_soloway';
// $password = 'J9B&n&pi43';

// Localhost db
$host = 'localhost';
$db_name = 'sw_project';
$username = 'root';
$password = '';
$dsn = "mysql:host=$host;dbname=$db_name;charset=utf8";

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection error: " . $e->getMessage());
}
?>
