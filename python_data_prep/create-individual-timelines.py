import json

people_histories = {}

YEAR = 2024

giant_people_object = json.loads(open(str(YEAR)+"/users.json", encoding="utf8").read())
giant_messages_object = json.loads(open(str(YEAR)+"/messages.json", encoding="utf8").read())

def process_messages():
	global giant_messages_object, people_histories

	for message in giant_messages_object:
		this_msg_userid = message.get("userId")
		this_msg_room_id = message.get("roomId")
		person_history = None
		if this_msg_userid in people_histories:
			person_history = people_histories[this_msg_userid]
		else:
			if str(message.get("vehicleId")) == "2": # if this initial message belonging to someone is on Carpathia... then continue to the next loop, rather than adding the person.
				print("Refusing to initialise a person whose first ever room entry was on carpathia")
				continue
			person_history = Person(this_msg_userid)
			people_histories[this_msg_userid] = person_history

		if len(person_history.room_entry_records) == 0 or not this_msg_room_id == person_history.room_entry_records[-1].get("roomid"):
			person_history.room_entry_records.append(makeRoomEntryRecord(this_msg_room_id, message.get("time")))
			print("Person with id "+str(person_history.id)+" enters room "+str(this_msg_room_id))
	
	output_file = open("OUTPUT_PEOPLE_ROOM_HISTORIES_"+str(YEAR)+".json","w")
	people_histories_json_compatible = []
	for person in people_histories:
		people_histories_json_compatible.append({"id":people_histories[person].id,
							 "name":people_histories[person].name,
							 "room_entry_records":people_histories[person].room_entry_records})

	output_file.write(json.dumps(people_histories_json_compatible))

class Person:
	def __init__(self, id):
		self.id = id
		self.room_entry_records = []
		self.name = get_user_name_by_id(id)

def get_user_name_by_id(id):
	output = ""
	for person in giant_people_object:
		if person.get("id") == id:
			output = person.get("name").strip() + " " + person.get("lastname").strip()
			break
	return output

def makeRoomEntryRecord(roomid, timestamp):
	return {"rm":roomid, "t":timestamp}


if "message" in giant_messages_object[0] or "_id" in giant_messages_object[0] or "type" in giant_messages_object[0] or "id" in giant_messages_object[0]:
	print("Yooo. This message object still has the message or oid content in it. We don't actually need that, and it's just taking up space on your filesystem... so I'm going to take the liberty of gutting it. It's okay! You can just get it back from the TVRPG archives page. But I'm definitely not carting 150MB json files around everywhere...")
	for entry in giant_messages_object:
		entry.pop("message", None)
		entry.pop("_id", None)
		entry.pop("id", None) #[sic], as there are two different id fields with slightly different names
		entry.pop("type", None)
	new_messages_file_with_message_content_stripped_out = json.dumps(giant_messages_object)
	open(str(YEAR)+"/messages.json", mode="w", encoding="utf8").write(new_messages_file_with_message_content_stripped_out)

process_messages()