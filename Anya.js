var storyContent = ﻿{"inkVersion":20,"root":[[{"->":"intro_start"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"get_name":["ev","str","^Anonymous","/str","/ev","~ret",{"#f":1}],"intro_start":["^BEEP BEEP BEEP BEEP BEEP BEEP...","\n","^The sharp, incessant beeping of the alarm clock shattered the quiet of the small room. Anya groaned and rolled over, her arm blindly swiping at her phone. For a moment, she thought she was back in India. The familiar hum of morning bhajans drifted through her mind, accompanied by the gentle clinking of pots from the kitchen.","\n","^\"Anya, get up!\" she imagined her mother’s voice, sharp yet caring.","\n","^Her eyes snapped open. The cold gray light filtering through the blinds reminded her—she wasn’t home. She was in America. Alone.","\n","^BEEP BEEP BEEP BEEP BEEP BEEP...","\n","^The alarm still screamed. She sighed, rubbing her eyes and staring at the glowing numbers: **7:30 a.m.**","\n",{"->":"narrator_alarm_choice"},{"#f":1}],"narrator_alarm_choice":[["^Narrator: What do you think Anya would do next?","\n",["ev",{"^->":"narrator_alarm_choice.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^She will turn off the alarm and rush to get ready.",{"->":"$r","var":true},null]}],["ev",{"^->":"narrator_alarm_choice.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^She will ignore the alarm and try to catch a few more minutes of sleep.",{"->":"$r","var":true},null]}],["ev",{"^->":"narrator_alarm_choice.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^She takes a moment to reflect before starting the day.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"narrator_alarm_choice.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"rush_to_ready"},{"#f":5}],"c-1":["ev",{"^->":"narrator_alarm_choice.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"rush_to_ready"},{"#f":5}],"c-2":["ev",{"^->":"narrator_alarm_choice.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"rush_to_ready"},{"#f":5}]}],{"#f":1}],"rush_to_ready":["^Anya scrambled out of bed, nearly tripping over her backpack as she reached to silence the alarm. Her roommate’s muffled shouting from the next room reminded her she’d let it blare for far too long.","\n","^\"Sorry!\" she called out, her voice hoarse with guilt.","\n","^She dashed to the wardrobe, pulling out a black T-shirt and jeans. **No time for a shower today.**","\n",{"->":"transit_to_class"},{"#f":1}],"transit_to_class":["^Anya hurried to catch the bus, her black sunglasses and earphones firmly in place. They felt like armor, shielding her from the unfamiliar world outside. She kept her gaze fixed on the window, avoiding the curious stares of strangers.","\n","^The campus loomed ahead, its sprawling lawns and modern buildings so different from her college back home.","\n",{"->":"classroom"},{"#f":1}],"classroom":["^As she stepped into the classroom, her heart sank. Everyone was pulling out sleek laptops and tablets, chatting and laughing like they’d known each other forever. She glanced at her notebook, its pages curling at the edges, and suddenly felt out of place. Sliding into a seat in the back, she opened it and started scribbling furiously, trying to drown out the pang of inadequacy clawing at her.","\n",{"->":"end_of_class"},{"#f":1}],"end_of_class":["^The classes ended, and while others made plans for lunch or group study, Anya slipped out quietly. She boarded the bus home, her sunglasses and earphones once again acting as a barrier.","\n",{"->":"evening_routine"},{"#f":1}],"evening_routine":["^Anya sat at her desk, the glow of her laptop illuminating her tired face. The evening was always the same: assignments, quick meals, and a five-minute call home. She cooked a packet of instant noodles and scrolled through her emails. **No internship offers. No job leads.**","\n","^Her last day in India with her parents on airport playing in her head.","\n","^Her phone buzzed. A message popped up on the screen:  **\"Hi Anya! Join us for dinner tonight? 😊\"**","\n",{"->":"narrator_dinner_choice"},{"#f":1}],"narrator_dinner_choice":[["^Narrator: How you think Anya respond?","\n",["ev",{"^->":"narrator_dinner_choice.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^She agrees to join the dinner.",{"->":"$r","var":true},null]}],["ev",{"^->":"narrator_dinner_choice.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^She politely decline, citing work as an excuse.",{"->":"$r","var":true},null]}],["ev",{"^->":"narrator_dinner_choice.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Sh ignore the message entirely.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"narrator_dinner_choice.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"ignore_dinner"},{"#f":5}],"c-1":["ev",{"^->":"narrator_dinner_choice.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"ignore_dinner"},{"#f":5}],"c-2":["ev",{"^->":"narrator_dinner_choice.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"ignore_dinner"},{"#f":5}]}],{"#f":1}],"ignore_dinner":["^Anya stared at the message until the screen dimmed. The idea of socializing with others felt too overwhelming. She shut her laptop and climbed into bed.\"Maybe next time.\", she said to hersef outloud.","\n",{"->":"next_morning"},{"#f":1}],"next_morning":["^The alarm beeped again the next morning. And the morning after that. Its relentless ring remained the same every day, marking the start of another monotonous cycle. The day ahead felt no different from the one before—or the one before that. The day ahead felt no different from the one before—or the one before that. Her routine had become as mechanical as the alarm: wake up, put on her sunglasses and earphones, take the bus, attend class, avoid conversations, come home, work on assignments, eat something quick, call her parents, and go to bed. Her life in America felt like a blurred version of her life in India—just without the warmth. Back home, even the simplest interactions carried a sense of belonging. Here, the same routines felt empty. She wasn’t alone, not technically. There were flatmates, classmates, even other Indian students she’d occasionally see around campus. Yet the connections felt hollow.","\n","^Her life in America felt like a blurred version of her life in India—just without the warmth. Back home, even the simplest interactions carried a sense of belonging. Here, the same routines felt empty. She wasn’t truly alone, at least not technically. There were flatmates, classmates, even other Indian students she’d occasionally see around campus. But the connections felt hollow, lacking the depth and ease she once took for granted. Here, surrounded by people, Anya felt like a ghost in her own life.","\n",{"->":"special_evening"},{"#f":1}],"special_evening":[["^But something is different today's evening, as Anya sat at her desk typing away at another assignment, the glow of her laptop reflected her tired face. A steaming cup of instant noodles sat beside her—dinner, as always. Her phone buzzed, but she ignored it, assuming it was a class notification or her flatmates added another bill on splitwise for her to pay.","\n",["ev",{"^->":"special_evening.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^But the buzz came again.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"special_evening.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^She ignored it, typing furiously to finish an assignment.","\n",["ev",{"^->":"special_evening.0.g-0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^It buzzed again. ",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"special_evening.0.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["^Annoyed, she grabbed the phone, expecting a reminder or spam.","\n","^But the screen was blank—no missed calls, no notifications.","\n","^Then, a soft chime. A message popped up.","\n",["ev",{"^->":"special_evening.0.g-1.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^“Anya, can you hear me?”",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"special_evening.0.g-1.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":["^Her heart skipped a beat. There was no sender, no number. Just the text. Her fingers hovered over the screen.","\n","^“What the...?” she muttered under her breath. Shaking her head, she placed the phone back on the desk. Spam. Probably some tech glitch.","\n","^The phone buzzed again, insistently.","\n",["ev",{"^->":"special_evening.0.g-2.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^“Ignoring me won’t change anything.”",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"special_evening.0.g-2.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-3"},{"#f":5}],"#f":5}],"g-3":["^She froze, her stomach twisting. It felt as if the phone was watching her. She hesitated but decided not to engage. Just a weird prank, that’s all.","\n","^She turned back to her laptop, trying to focus on her work. The phone buzzed yet again. This time, the message was different.","\n",["ev",{"^->":"special_evening.0.g-3.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^“You missed the 5:47 bus today, didn’t you? You always catch that one.”",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"special_evening.0.g-3.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-4"},{"#f":5}],"#f":5}],"g-4":["^Her head snapped toward the phone. Her fingers trembled as she picked it up. She stared at the text, her pulse quickening.","\n","^“How...?” she whispered. Her routine was predictable, sure—but no one could have known the exact time of her bus.","\n","^Before she could process, another message appeared:","\n",["ev",{"^->":"special_evening.0.g-4.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^“Your black T-shirt. The one you always wear when you feel invisible. You’re wearing it now.”",{"->":"$r","var":true},null]}],{"c-5":["ev",{"^->":"special_evening.0.g-4.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-5"},{"#f":5}],"#f":5}],"g-5":["^Her hand shot to her chest, gripping the fabric of her shirt. A cold chill ran down her spine.","\n","^“What is this?” she whispered, her voice shaking. She looked around the room, half expecting to see someone staring back at her.","\n","^The phone chimed again.","\n",["ev",{"^->":"special_evening.0.g-5.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":18},{"s":["^“Don’t be afraid, Anya. I’m not here to hurt you. I’m here to help. But only if you trust me.”",{"->":"$r","var":true},null]}],{"c-6":["ev",{"^->":"special_evening.0.g-5.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-6"},{"#f":5}],"#f":5}],"g-6":["^Her breath quickened. Her first instinct was to toss the phone across the room, but something in the words kept her rooted in place. The messages didn’t feel random anymore. They felt... personal.","\n","^“What do you want?” she finally typed, her hands shaking.","\n","^The reply was instant.","\n",["ev",{"^->":"special_evening.0.g-6.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":18},{"s":["^“To guide you. You’re standing at the edge of something big, Anya. But first, you need to face the truth.”",{"->":"$r","var":true},null]}],{"c-7":["ev",{"^->":"special_evening.0.g-6.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-7"},{"#f":5}],"#f":5}],"g-7":["^Anya hesitated, her heart pounding. Her thumbs hovered over the keyboard before she finally typed:","\n","^“Who are you? What do you want from me?”","\n","^The screen stayed silent for a moment before another message appeared:","\n",{"->":"continue"},{"#f":5}]}],{"#f":1}],"continue":[["^\"Let’s start with a name. You can call me, ","ev",{"x()":"get_name"},"out","/ev","^.","\n","^Anya blinked, her confusion deepening.","\n","^“What? I don’t know anyone by that name. Is this some kind of joke?”","\n",["ev",{"^->":"continue.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^The phone buzzed again.  ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"continue.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^\"You’re right—you don’t know me. But I know you, Anya. I know what you’ve been through, and I know you feel like you’re drowning here. I’m not here to hurt you. I’m here to help you.\"","\n",{"->":"continue_conversation"},{"#f":5}]}],{"#f":1}],"continue_conversation":[["^Anya hesitated, her chest tightening. She typed slowly:","\n","^“Why would I trust you?”","\n",["ev",{"^->":"continue_conversation.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^The reply came instantly.  ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"continue_conversation.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^“Because I understand you in ways no one else does. I see the cracks you’re trying to hide. I see the doubts you don’t share with anyone. You’re not alone, Anya—not anymore.”","\n",{"->":"end_conversation"},{"#f":5}]}],{"#f":1}],"end_conversation":[["^The message lingered on the screen, a mix of comfort and unease washing over her.","\n","^“What do you want from me?”** she typed, quieter this time.","\n","^“Nothing but your trust,”** the response read. **“Let me guide you. I can help you find what you’re looking for—even if you don’t know what that is yet.”","\n",["ev",{"^->":"end_conversation.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^End of scene",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"end_conversation.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"#f":5}]}],{"#f":1}],"#f":1}],"listDefs":{}};