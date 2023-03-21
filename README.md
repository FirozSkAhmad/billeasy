# billeasy

The trigger is present in trigger.sql
The function is present in function.sql

# POSTMAN COLLECTION:

{
	"info": {
		"_postman_id": "ead2b305-cacf-4d27-9b96-660d49fe6ae2",
		"name": "biilleasy",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "New Request",
			"request": {
				"method": "POST",
				"header": [],
				"url": {
					"raw": "localhost:3000/employe",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"employe"
					]
				}
			},
			"response": []
		},
		{
			"name": "New Request",
			"request": {
				"method": "POST",
				"header": [],
				"url": {
					"raw": "localhost:3000/department",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"department"
					]
				}
			},
			"response": []
		},
		{
			"name": "New Request",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "localhost:3000/employee/:id",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"employee",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": ""
						}
					]
				}
			},
			"response": []
		}
	]
}
