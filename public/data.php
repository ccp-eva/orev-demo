<?php
  $jsonString = json_decode(file_get_contents('php://input'), true);
  $data = $jsonString["data"];
  $fname = $jsonString["fname"];
  $time = date("Y-m-d-H-i-s");
  file_put_contents('data/orev-' . $fname . '-' . $time . '.json', $data, true);
  echo '{ "success": true }';
?>
