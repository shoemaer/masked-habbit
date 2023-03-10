json.array! @tasks do |task|
	json.extract! task,  	:id,            
 											:brief,          
 											:description,    
 											:location,       
 											:vehicle_needed, 
 											:completed,      
 											:task_maker_id, 
 											:category_id,    
 											:task_doer_id,
											:maker_name,
											:doer_name,
											:latitude,
											:longitude
	json.photoUrl url_for(task.photo)
end