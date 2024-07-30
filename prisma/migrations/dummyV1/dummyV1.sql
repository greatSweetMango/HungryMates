-- Delete existing data from tables
TRUNCATE TABLE "Order" CASCADE;
TRUNCATE TABLE "Chat" CASCADE;
TRUNCATE TABLE "Participants" CASCADE;

-- Insert new data into Order table
INSERT INTO "Order" (id, "orderGroupCreaterId", "orderGroupName", "diningTime", "diningLocation", "diningDescription", status) VALUES
  ('order1', 'clz82keyy00002h6h81oop075', 'Lunch Group', '2023-08-29 12:00:00', '42Seoul Cafeteria', 'Lunch with friends', 'pending'),
  ('order2', 'clz8atrmw0000p8w8an0zwokx', 'Dinner Group', '2023-08-29 18:00:00', '42KL Restaurant', 'Dinner and networking', 'confirmed'),
  ('order3', 'clz8bsjst0000g9pwx70p3egd', 'Study Group', '2023-08-29 14:00:00', '42Seoul Library', 'Study session', 'pending');

-- Insert new data into Chat table
INSERT INTO "Chat" (id, "orderId", "userId", content, "createdAt") VALUES
  ('chat1', 'order1', 'clz82keyy00002h6h81oop075', 'Looking forward to lunch!', '2023-08-29 10:00:00'),
  ('chat2', 'order1', 'clz8atrmw0000p8w8an0zwokx', 'Me too!', '2023-08-29 10:10:00'),
  ('chat3', 'order2', 'clz8bsjst0000g9pwx70p3egd', 'Excited for dinner!', '2023-08-29 11:00:00'),
  ('chat4', 'order2', 'clz82keyy00002h6h81oop075', 'Cant wait!', '2023-08-29 11:05:00'),
  ('chat5', 'order3', 'clz8atrmw0000p8w8an0zwokx', 'Ready to study hard!', '2023-08-29 12:00:00');

-- Insert new data into Participants table
INSERT INTO "Participants" (id, "orderId", "userId") VALUES
  ('participant1', 'order1', 'clz82keyy00002h6h81oop075'),
  ('participant2', 'order1', 'clz8atrmw0000p8w8an0zwokx'),
  ('participant3', 'order2', 'clz8bsjst0000g9pwx70p3egd'),
  ('participant4', 'order2', 'clz82keyy00002h6h81oop075'),
  ('participant5', 'order3', 'clz8atrmw0000p8w8an0zwokx'),
  ('participant6', 'order3', 'clz82keyy00002h6h81oop075');

-- Additional data to make sure we have at least 10 entries for each table

-- Additional Orders
INSERT INTO "Order" (id, "orderGroupCreaterId", "orderGroupName", "diningTime", "diningLocation", "diningDescription", status) VALUES
  ('order4', 'clz82keyy00002h6h81oop075', 'Breakfast Group', '2023-08-30 08:00:00', '42Seoul Cafe', 'Breakfast and chat', 'pending'),
  ('order5', 'clz8atrmw0000p8w8an0zwokx', 'Brunch Group', '2023-08-30 10:00:00', '42KL Diner', 'Brunch meeting', 'confirmed'),
  ('order6', 'clz8bsjst0000g9pwx70p3egd', 'Coding Session', '2023-08-30 15:00:00', '42Seoul Lab', 'Group coding session', 'pending'),
  ('order7', 'clz82keyy00002h6h81oop075', 'Project Discussion', '2023-08-30 16:00:00', '42Seoul Room 101', 'Discussion on project', 'confirmed'),
  ('order8', 'clz8atrmw0000p8w8an0zwokx', 'Evening Walk', '2023-08-30 18:00:00', '42KL Park', 'Evening walk and talk', 'pending'),
  ('order9', 'clz8bsjst0000g9pwx70p3egd', 'Gym Session', '2023-08-30 19:00:00', '42Seoul Gym', 'Workout together', 'confirmed'),
  ('order10', 'clz82keyy00002h6h81oop075', 'Movie Night', '2023-08-30 20:00:00', '42Seoul Theater', 'Watch a movie', 'pending');

-- Additional Chats
INSERT INTO "Chat" (id, "orderId", "userId", content, "createdAt") VALUES
  ('chat6', 'order4', 'clz82keyy00002h6h81oop075', 'Good morning!', '2023-08-30 07:50:00'),
  ('chat7', 'order4', 'clz8atrmw0000p8w8an0zwokx', 'Morning!', '2023-08-30 07:55:00'),
  ('chat8', 'order5', 'clz8bsjst0000g9pwx70p3egd', 'Whats for brunch?', '2023-08-30 09:50:00'),
  ('chat9', 'order5', 'clz82keyy00002h6h81oop075', 'Lets decide once we meet.', '2023-08-30 09:55:00'),
  ('chat10', 'order6', 'clz8atrmw0000p8w8an0zwokx', 'Ready to code?', '2023-08-30 14:50:00'),
  ('chat11', 'order6', 'clz82keyy00002h6h81oop075', 'Absolutely!', '2023-08-30 14:55:00'),
  ('chat12', 'order7', 'clz8bsjst0000g9pwx70p3egd', 'Lets brainstorm!', '2023-08-30 15:50:00'),
  ('chat13', 'order7', 'clz82keyy00002h6h81oop075', 'I have some ideas.', '2023-08-30 15:55:00'),
  ('chat14', 'order8', 'clz8atrmw0000p8w8an0zwokx', 'Nice evening for a walk.', '2023-08-30 17:50:00'),
  ('chat15', 'order8', 'clz82keyy00002h6h81oop075', 'Indeed!', '2023-08-30 17:55:00');

-- Additional Participants
INSERT INTO "Participants" (id, "orderId", "userId") VALUES
  ('participant7', 'order4', 'clz82keyy00002h6h81oop075'),
  ('participant8', 'order4', 'clz8atrmw0000p8w8an0zwokx'),
  ('participant9', 'order5', 'clz8bsjst0000g9pwx70p3egd'),
  ('participant10', 'order5', 'clz82keyy00002h6h81oop075'),
  ('participant11', 'order6', 'clz8atrmw0000p8w8an0zwokx'),
  ('participant12', 'order6', 'clz82keyy00002h6h81oop075'),
  ('participant13', 'order7', 'clz8bsjst0000g9pwx70p3egd'),
  ('participant14', 'order7', 'clz82keyy00002h6h81oop075'),
  ('participant15', 'order8', 'clz8atrmw0000p8w8an0zwokx'),
  ('participant16', 'order8', 'clz82keyy00002h6h81oop075');
