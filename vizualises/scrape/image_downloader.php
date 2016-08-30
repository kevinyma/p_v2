<!DOCTYPE HTML>
<html>
<body>
<?php
//this is a php scraper to download every file in one column of a csv, then to append to 
//that csv, in a new column, the filenames. whew. here we go.

$row = 1;
if (($handle = fopen("test.csv", "r")) !== FALSE) {
  while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
    $num = count($data);
    echo "<p> $num fields in line $row: <br /></p>\n";
    $row++;
    for ($c=0; $c < $num; $c++) {
        echo $data[$c] . "<br />\n";
    }
  }
  fclose($handle);
}

?>
</body>
</html>