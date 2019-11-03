import React from "react";
import ChatBot from "react-simple-chatbot";

function CustomChatBot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };
  const steps = [
    {
      id: "Greet",
      message: "Hello Friend, Welcome to F-Connect",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "May I know your name?",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Asking options to help"
    },
    {
      id: "Asking options to help",
      message: "Hi {previousValue}, Please click on what you want help with!",
      trigger: "Displaying options to help"
    },
    {
      id: "Displaying options to help",
      options: [
        {
          value: "Housing Services",
          label: "Housing Services",
          trigger: "Asking for Housing Services"
        },
        {
          value: "Financial Aides and Services",
          label: "Financial Aides and Services",
          trigger: "Asking for Financial Services"
        },
        {
          value: "Medical Services",
          label: "Medical Services",
          trigger: "Asking for Medical Services"
        },
        {
          value: "College Tutition Services",
          label: "College Tutition Services",
          trigger: "Asking for College Tuition Services"
        },
        {
          value: "Foster Mentor",
          label: "Foster Mentor",
          trigger: "Asking for Foster Mentor Services"
        }
      ]
    },
    {
      id: "Asking for Housing Services",
      message: "Your Housing  service is here",
      trigger: "Asking for other services"
    },
    {
      id: "Asking for Medical Services",
      message: "Your Medical service is here",
      trigger: "Asking for other services"
    },
    {
      id: "Asking for other services",
      message: "Is there any other thing, I can help you with today?",
      trigger: "Display Yes or No"
    },
    {
      id: "Display Yes or No",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: "Display Services"
        },
        {
          value: "false",
          label: "No",
          trigger: "Done"
        }
      ]
    },
    {
      id: "Display Services",
      message: "Please select service of your interest",
      trigger: "Displaying options to help"
    },
    {
      id: "Asking for College Tuition Services",
      message: "Your Tuition service is here",
      trigger: "Asking for other services"
    },
    {
      id: "Asking for Foster Mentor Services",
      message: "Your Mentor service is here",
      trigger: "Asking for other services"
    },

    {
      id: "Asking for Financial Services",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: "Asking for other services"
        },
        {
          value: "false",
          label: "No",
          trigger: "Done"
        }
      ]
    },
    // {
    //   id: "Asking for Housing Services",
    //   message: "Here is your housing services",
    //   trigger: "Showing services"
    // },
    {
      id: "Showing services",
      options: [
        {
          //   value: true,
          //   label: "Yes",
          //   trigger: () => {
          //     props.eventHandler("tomato");
          //     return "Asking for Mushroom in Pizza";
          value: true,
          label: "Yes",
          trigger: () => {
            return "Housing service here";
          }
        },
        {
          value: "false",
          label: "No",
          trigger: "Done"
        }
      ]
    },

    {
      id: "Done",
      message: "Have a great day !!",
      end: true
    }
  ];
  return <ChatBot steps={steps} {...config} />;
}
export default CustomChatBot;
