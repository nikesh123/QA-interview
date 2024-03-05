from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
import time

# Open the browser and navigate to the OrangeHRM login page
url = "https://opensource-demo.orangehrmlive.com/"
driver = webdriver.Chrome()
driver.get(url)
driver.maximize_window()
time.sleep(5)

#MODULE 1 (LOGIN) #NOTE: I request you to Please comment out one method to execute and verify

# Module 1: Login   (Method 1 : Manually Passing the Username and Password through parametres)

def login(username, password):
    #Locating the webelement username_box by locator NAME where we send parametre username that contains the text value
    #We use send_keys() method to pass the text values in selenium. IN this case, username and password
    username_box = driver.find_element(By.NAME, 'username')
    username_box.send_keys(username)
    
    #Locating the webelement password box by locator NAME where we send parametre password that contains the text value
    psw_box = driver.find_element(By.NAME, 'password')
    psw_box.send_keys(password)
    
    #locating the login button. I have used CSS selector to locate the button. If the locator  changes in future we can use 
    #link_text locator unless the name of the button remains same
    login_button = driver.find_element(By.CSS_SELECTOR, 'button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button')
    
    #using javascript execute command to avoid elementnotclickable possible error
    driver.execute_script("arguments[0].click();",login_button)
    
    

# Provide valid login credentials
login("Admin", "admin123")


#we can do it by extracting the username and password as it is from default state of OrangeHRM login page
#I have written the code for it below. as METHOD 2


#Module 1 : LOGIN (Method 2: Extracting the Given Username and Password from the website itself and passing using send_keys())

#locating username (thats mentioned in the website) and extracting its text value and spliting it by colon and replacing whitespaces with blanks to get the username text in proper format before passing

username_text = driver.find_element(By.XPATH,'/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/div/p[1]').text.split(":")[1].replace(' ','')

#similar process for password text extraction.
psw_text = driver.find_element(By.XPATH,'/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/div/p[2]').text.split(":")[1].replace(' ','')
print(username_text)
print(psw_text)

#Locating the webelement username_box by locator NAME where we send parametre username that contains the text value
#We use send_keys() method to pass the text values in selenium. IN this case, username and password
username_box = driver.find_element(By.NAME, 'username')
username_box.send_keys(username_text)

#Locating the webelement password box by locator NAME where we send parametre password that contains the text value
psw_box = driver.find_element(By.NAME, 'password')
psw_box.send_keys(psw_text)

#locating the login button. I have used CSS selector to locate the button. If the locator  changes in future we can use 
#link_text locator unless the name of the button remains same
login_button = driver.find_element(By.CSS_SELECTOR, 'button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button')
#using javascript execute command to avoid elementnotclickable possible error
driver.execute_script("arguments[0].click();",login_button)

print("SUCCESSFULLY LOGGED IN")

#That Completes the Login Test. Please comment out method code if u need to verify both the methods by executing the code
###################################################



#####################################################

#MODULE 2

time.sleep(2)

# Module 2: PIM
#In this module, i will automate the process of going to PIM section at left and adding myself (nikesh uprety) just for a demo
#as an employee

#locating and performing click action to PIM
pim_button = driver.find_element(By.LINK_TEXT, "PIM")
driver.execute_script("arguments[0].click();",pim_button)
time.sleep(5)

#Add
add_button = driver.find_element(By.XPATH,'/html/body/div/div[1]/div[2]/div[2]/div/div[2]/div[1]/button')
driver.execute_script("arguments[0].click();",add_button)
time.sleep(5)

#Adding myself by passing my name and id (just as an example) and saving my information
first_name = driver.find_element(By.NAME, 'firstName').send_keys('Nikesh')
last_name = driver.find_element(By.NAME, 'lastName').send_keys('Uprety')
emp_id = driver.find_element(By.XPATH, '/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input').send_keys('1111')
save_btn = driver.find_element(By.XPATH, '/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]')
driver.execute_script("arguments[0].click();",save_btn)

print("SUCCESSFULLY ADDED MY DETAILS IN PIM SECTION") #if this print statement does not show in o/p, that means it failed

########################################################


######################################################

# MODULE 3 - LOGOUT
#Now, in this MODULE 3, Lets logout of the account

# Pause for a moment to observe the Admin module
time.sleep(10)

#locating  and clicking the logout dropdown
#note: could not use Select option because apparently its not exactly a dropdown webelement
logout_dropdown = driver.find_element(By.XPATH, '/html/body/div/div[1]/div[1]/header/div[1]/div[2]/ul/li')
driver.execute_script("arguments[0].click();",logout_dropdown)
time.sleep(5)

#locating the text 'Logout' in list below and clicking it using javascript execute command to avoid an click exception
logout_option = driver.find_element(By.LINK_TEXT,'Logout')
driver.execute_script("arguments[0].click();",logout_option)
time.sleep(3)
print("SUCCESSFULLY LOGGED OUT OF THE ACCOUNT")
# Close the browser
driver.quit()

######################################################


#NOTE: I HAVE INCLUDED CODES OF ALL 3 MODULES I AUTOMATED TOGETHER AND NOT IN A SEPARATE FILE BECAUSE THESE ARE INTERCONNECTED PROCESSES, ONE MODULE NEEDS TO BE EXECUTED TO MOVE TO THE NEXT


