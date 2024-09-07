import json
import datetime

MESSAGES_FILENAME = "messages2024.json"

giant_messages_object = json.loads(open(MESSAGES_FILENAME, encoding="utf8").read())

excluded_words = ["","a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an",
        "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot",
        "could", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get",
        "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i","ive",
        "if", "im", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may",
        "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often",
        "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should",
        "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these",
        "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what",
        "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet",
        "you", "your","/","wwwyoutubecom","watchv","https"]

day_starts = [None,datetime.datetime(2024, 4, 10),datetime.datetime(2024, 4, 11),datetime.datetime(2024, 4, 12),
datetime.datetime(2024, 4, 13),datetime.datetime(2024, 4, 14),datetime.datetime(2024, 4, 15),
datetime.datetime(2024, 4, 16),datetime.datetime(2024, 4, 17),datetime.datetime(2024, 4, 18)]

def process_messages():
	global giant_messages_object

	first_time = True

	for day_start in day_starts:
		word_freq_table = {}

		if not first_time:
			day_end = datetime.datetime(day_start.year, day_start.month, day_start.day+1)
		else:
			day_start = datetime.datetime(2024, 4, 10)
			day_end = datetime.datetime(2024, 4, 19)

		timestamp_start = day_start.timestamp() * 1000
		timestamp_end = day_end.timestamp() * 1000
		print(timestamp_start)
		print(timestamp_end)

		for msg in giant_messages_object:
			t = msg.get("t")
			if t == None:
				t = msg.get("time")			
			if t > timestamp_start and t < timestamp_end:
				message = msg.get("message")
				message = message.replace(",","").replace(".","").replace("!","").replace("?","").replace("-","").replace("\"","").replace("'","").lower()
				if not "\\u" in message and not "wwwyoutubecom" in message and not "https" in message:
					for word in message.split(" "):
						if word in word_freq_table:
							word_freq_table[word] += 1
						else:
							word_freq_table[word] = 1
			
		output_array = []
		for key in word_freq_table:
			if not key in excluded_words:
				output_array.append({"word":key, "freq":word_freq_table[key]})
		output_array.sort(key=lambda x : x.get("freq"), reverse=True)

		if first_time:
			for i in range(100):
				excluded_words.append(output_array[i].get("word"))
			first_time = False
		else:
			s = ""
			for item in output_array:
				freq = item.get("freq")
				word = item.get("word")
				s += word + "," + str(freq)
			output_file = open(str(day_start.day)+"OUTPUT.csv", encoding="utf8",mode="w")
			output_file.write(s)

if "_id" in giant_messages_object[0] or "type" in giant_messages_object[0] or "id" in giant_messages_object[0]:
	print("Yooo. This message object still has irrelevant content in it. We don't actually need that, and it's just taking up space on your filesystem... so I'm going to take the liberty of gutting it. It's okay! You can just get it back from the TVRPG archives page. But I'm definitely not carting 150MB json files around everywhere...")
	for entry in giant_messages_object:
		entry.pop("_id", None)
		entry.pop("id", None) #[sic], as there are two different id fields with slightly different names
		entry.pop("type", None)
		entry.pop("userId", None)
		entry.pop("roomId", None)
		entry["t"] = entry["time"]
		entry.pop("time",None)
	new_messages_file_with_message_content_stripped_out = json.dumps(giant_messages_object)
	open(MESSAGES_FILENAME, mode="w", encoding="utf8").write(new_messages_file_with_message_content_stripped_out)

process_messages()