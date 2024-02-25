while True:
    # Prompt the user for input
    user_input = input("Enter your age (between 18 and 100): ")

    # Check if the input is a valid integer
    try:
        age = int(user_input)
    except ValueError:
        print("Invalid input. Please enter a valid number.")
        continue  # Skip further processing and prompt for input again

    # Check if the age is within the specified range
    if age < 18 or age > 100:
        print("Invalid age. Please enter an age between 18 and 100.")
        continue  # Skip further processing and prompt for input again

    # If the input is valid, break out of the loop and continue with the rest of the program
    break

print("Valid age entered:", age)
# Further processing of the valid age input can continue here


