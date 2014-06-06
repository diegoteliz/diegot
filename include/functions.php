<?php

/*************************************
	           Utilities
*************************************/

function get_current_year() {
	$current_year = date('Y');
	return $current_year;
}

function get_experience_years( $init_year ) {
	$current_year = get_current_year();
	$experience = $current_year - $init_year;
	return $experience;
}

function get_years_old( $birth_day ) {
	list( $Y , $m , $d ) = explode( "-" , $birth_day );
	return( date( "md" ) < $m.$d ? date( "Y" ) - $Y - 1 : date( "Y" ) - $Y );
}

?>