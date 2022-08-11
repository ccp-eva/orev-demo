<?php
  // Moves uploaded video file to a uploads folder
  $target_path = "./data/" . basename($_FILES["vidfile"]["name"] . ".webm");
  move_uploaded_file($_FILES["vidfile"]["tmp_name"], $target_path );
?>