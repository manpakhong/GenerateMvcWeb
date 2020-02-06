#!/bin/bash
bilpid=$(sudo ps aux | grep billing-patient-charges | grep -v 'grep --color' | tr -s ' ' | cut -d ' ' -f 2)
#if sudo ps aux | grep billing-patient-charges | grep -v 'grep --color' > /dev/null 
	#then
	#	echo "billing-patient-charges is running ..."
	#else
	#	echo "billing-patient-charges is stopped!"
#fi
#echo "$bilpid" | wc -l
SERVICE="billing-patient-charge"
counter=0
length=$(sudo ps aux | grep billing-patient-charges | grep -v 'grep --color' | tr -s ' ' | cut -d ' ' -f 2 | wc -l)
#echo "length is $length"
for var in "$bilpid"
do
	if [ $((length)) -gt 1 ];
	then
		if [ "$counter" -lt $((length)) ]
		then
			echo "$counter:$var"
		fi
	else
		if [ "$counter" -ne 0 ]
		then
			echo "$counter:$var"
		fi
	fi
	counter=`expr $counter + 1`
done
if [ $((length)) -gt 1 ]
	then
		echo "$SERVICE is running ..."
	else
		echo "$SERVICE is stopped!"
fi
