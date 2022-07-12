let tweeted = [     //created a object w/ an array of 10 tweets in it//
    {
        tweet: `hello`,
        username: `Tyler`,
        created_at: `01-20-2022`,
        age: 17
    },

    {
        tweet: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
        username: `Aria`,
        created_at: `01-20-2021`,
        age: 20
    },

    {
        tweet: `Possimus ullam tempora adipisci non.`,
        username: `Jackson`,
        created_at: `01-20-2012`,
        age: 14
    },

    {

        tweet: `nostrum quaerat sint totam.`,
        username: `Noah`,
        created_at: `01-20-2018`,
        age: 30
    },

    {
        tweet: ` Animi a debitis adipisci dolor, nostrum temporibus veniam quibusdam ut corporis sit sed.`,
        username: `Liam`,
        created_at: `01-20-2013`,
        age: 27
    },

    {
        tweet: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        username: `Lucas`,
        created_at: `01-20-2008`,
        age: 16
    },

    {
        tweet: `Voluptatibus officia tempore incidunt hic voluptatum dolore error minus.`,
        username: `Benjamin`,
        created_at: `01-20-2016`,
        age: 14
    },

    {
        tweet: `Blanditiis architecto nesciunt obcaecati asperiores tempora!`,
        username: `Ethan`,
        created_at: `01-20-2012`,
        age: 19
    },

    {
        tweet: `Atque doloribus delectus nihil perspiciatis suscipit laborum?`,
        username: `Theo`,
        created_at: `01-20-2019`,
        age: 42
    },

    {
        tweet: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        username: `Riley`,
        created_at: `01-20-2020`,
        age: 28
    }

];

let counter = 0;        //created a vaiable counter that sets the index to 0//
while (counter < tweeted.length) {  // a while loop that counts up and stops at the end of tweeted's index lenght//
    if (tweeted[counter][`age`] >= 18) {    //if statment that goes into tweeted, goes into the index number gets the age and sees if its 18 or above, will only display 18 and above//
        console.log(`tweet: ${tweeted[counter][`tweet`]}`); // goes into tweeted, index number its currently on and grabs the tweet and prints to console//
        console.log(`username: ${tweeted[counter][`username`]}`); // goes into tweeted, index number its currently on and grabs the username and prints to console//
        console.log(`Created_at: ${tweeted[counter][`created_at`]}`); // goes into tweeted, index number its currently on and grabs the created_at and prints to console//

    } else {
        console.log()
    }
    counter++ // adds 1 to the index counter
}




for (counter = 0; counter < tweeted.length; counter++){ // counter that sets the index to 0, for loop that counts up and stops at the end of tweeted's index lenght,  adds 1 to the index counter//
    if (tweeted[counter][`age`] < 18) {      //if statment that goes into tweeted, goes into the index number gets the age and sees if its under 18, will only display below 18 //
        console.log(`tweet: ${tweeted[counter][`tweet`]}`); // goes into tweeted, index number its currently on and grabs the tweet and prints to console//
        console.log(`username: ${tweeted[counter][`username`]}`);   // goes into tweeted, index number its currently on and grabs the username and prints to console//
        console.log(`Created_at: ${tweeted[counter][`created_at`]}`);   // goes into tweeted, index number its currently on and grabs the created_at and prints to console//

    } else {
        console.log()
    }
}
