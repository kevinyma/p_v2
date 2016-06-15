<!DOCTYPE HTML>
<html>
<head>
</head>
<body>
<?php

//this is basically a mess
function parse_csv_file($csvfile) {
    $csv = Array();
    $rowcount = 0;
    if (($handle = fopen($csvfile, "r")) !== FALSE) {
        $max_line_length = defined('MAX_LINE_LENGTH') ? MAX_LINE_LENGTH : 10000;
        $header = fgetcsv($handle, $max_line_length);
        $header_colcount = count($header);
        while (($row = fgetcsv($handle, $max_line_length)) !== FALSE) {
            $row_colcount = count($row);
            if ($row_colcount == $header_colcount) {
                $entry = array_combine($header, $row);
                $csv[] = $entry;
            }
            else {
                error_log("csvreader: Invalid number of columns at line " . ($rowcount + 2) . " (row " . ($rowcount + 1) . "). Expected=$header_colcount Got=$row_colcount");
                return null;
            }
            $rowcount++;
        }
        //echo "Totally $rowcount rows found\n";
        fclose($handle);
    }
    else {
        error_log("csvreader: Could not read CSV \"$csvfile\"");
        return null;
    }
    return $csv;
}

function getdata($csvFile){
    $file_handle = fopen($csvFile, 'r');
    while (!feof($file_handle) ) {
        $line_of_text[] = fgetcsv($file_handle, 1024);
    }
    fclose($file_handle);
    return $line_of_text;
}

$jsonRaw = file_get_contents("posters_omdb.json");
$json = json_decode($jsonRaw, true);
$length = count($json);


//new csv file for writing 
$writeFile = fopen('urls.csv', 'w');
fputcsv($File, array('poster_url'));

echo ("<pre>");
for ($i = 0; $i < $length; $i ++){
	$script_id = $json[$i]['script_id'];
	$infolink = $json[$i]['Link'];
	$pageData = file_get_contents($infolink);
	$pageDataJson = json_decode($pageData);
	$url = $pageDataJson->{"Poster"};
	echo ("<pre>");
	print_r($url);
	echo ("</pre>");

	fputcsv($writeFile,array($url));
}

fclose($writeFile);
print_r("completed!");

//loops through csv file, gets contents of each link, converts contents to JSON and extracting path to poster
// for ($i = 0; $i < $length; $i ++){
	// $script_id = $json[$i]['script_id'];
	// $infolink = $json[$i]['Link'];
	// $pageData = file_get_contents($infolink);
	// $pageDataJson = json_decode($pageData);
	// $path = $pageDataJson->{"movie_results"}[0]->{"poster_path"};
	// $url = "http://image.tmdb.org/t/p/original".$path;


	// fputcsv($writeFile,array($url));
// }



?>
</body>
</html>