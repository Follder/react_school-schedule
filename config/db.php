<?php
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
