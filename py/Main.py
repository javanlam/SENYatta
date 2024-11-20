import Reply
import keyboard
open('history.txt',"w").close()
setting = ["Asking.txt","Buying.txt","Chatting.txt"]
file_name = setting[0]
print("== SENyatta - 你的個人說話訓練伙伴 ==\n==SENyatta - Your Personalized Speaking Trainer ==")
name_scenario = ["點餐 Ordering Food", "超市購買物品 Purchasing Items in Supermarket", "自訂場景(需描述對方職位及場景) Self-defined Scenario (Describe the scenario and the bot's position)"]
print("現時的場景 Current Scenario: " + name_scenario[0])
print("按A開始錄音 / 按S轉換場景 / 按E終結\nPress A to start recording / Press S to change scenario / Press E to end session")
while True:
    if keyboard.read_key() == "s":
        print("== 設定 Settings ==\n現時所選場景 Current Scenario: " + name_scenario[0] +"\n按C更改 / 按R退出\nPress C to change / Press R to exit settings")
        while True:    
            if keyboard.read_key() == "c":
                file_list = list(enumerate(setting))
                for i in range(len(file_list)):
                    print("場景 Scenario " + str(file_list[i][0] +1 ) + ": " + name_scenario[i])
                print("按下相應數字轉換場景 Press the corresponding number to change scenarios\n(如按1選擇 E.g. Press 1 to choose" + '"' + name_scenario[0] + '"')
                x = keyboard.read_key()
                file_name = setting[int(x)-1]
                print("#######################################################################")
                print("現時的場景 Current Scenario: " + name_scenario[int(x) - 1] +"\n按C更改 / 按R退出\nPress C to change / Press R to exit settings")
                print("#######################################################################")
            elif keyboard.read_key() == "r":
                print("已退出設定 Settings Closed")
                print("按A開始錄音 / 按S轉換場景 / 按E終結\nPress A to start recording / Press S to change scenario / Press E to end session")
                break

    if keyboard.read_key() == "a":
        Reply.Conversation(file_name)
    if keyboard.read_key() == "e":
        print("完結訓練，感謝使用！\nEnd of training session, thank you for choosing us!")
        break