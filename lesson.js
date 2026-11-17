/* Editable lesson content. Each card has one teaching category. */
const LESSON = [
 {name:'Destinations',question:'Where do you like to spend your vacation? Why?',hint:'Catch places to spend a vacation.',words:['at the beach','in the mountains','in a city','in the countryside'],model:'I like to spend my vacation {word} because it is relaxing.'},
 {name:'Activities',question:'What kind of vacation do you like? Why?',hint:'Catch vacation activities.',words:['backpacking','camping','skiing','going on coach trips','taking language courses'],model:'I enjoy {word} because I like to meet people.'},
 {name:'Transport',question:'How do you like to travel? Why?',hint:'Catch ways to travel.',words:['by bus','by car','by coach','by train','by plane','by bicycle','on foot'],model:'I like to travel {word} because it is cheap.'},
 {name:'Accommodation',question:'Where do you like to stay? Why?',hint:'Catch places or people to stay with.',words:['in a hotel','in a guest house','at a campsite','with friends'],model:'I like to stay {word} because it is comfortable.'},
 {name:'Suggestions',question:'Your partner likes nature and being outdoors. What would you suggest?',hint:'Catch suggestions that match this partner’s preferences.',words:['go to the beach','go backpacking','go camping'],extra:['take the train','stay in a guest house'],model:'You could {word} because you like being outdoors.'}
];
const REASONS = ['quiet','relaxing','exciting','interesting','meet people','play sports','improve my English','have fun','fast','cheap','comfortable'];
