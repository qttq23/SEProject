-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: onlinebookstore
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `id` int(11) DEFAULT NULL,
  `original_publication_year` int(11) DEFAULT NULL,
  `title` text,
  `image_url` text,
  `created_at` date DEFAULT NULL,
  `description` text,
  `price` int(11) DEFAULT NULL,
  `author` text,
  FULLTEXT KEY `title` (`title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,2008,'The Hunger Games (The Hunger Games, #1)','https://images.gr-assets.com/books/1447303603m/2767052.jpg',NULL,NULL,NULL,'Suzanne Collins'),(2,1997,'Harry Potter and the Sorcerer\'s Stone (Harry Potter, #1)','https://images.gr-assets.com/books/1474154022m/3.jpg',NULL,NULL,NULL,'J.K. Rowling, Mary GrandPré'),(3,2005,'Twilight (Twilight, #1)','https://images.gr-assets.com/books/1361039443m/41865.jpg',NULL,NULL,NULL,'Stephenie Meyer'),(4,1960,'To Kill a Mockingbird','https://images.gr-assets.com/books/1361975680m/2657.jpg',NULL,NULL,NULL,'Harper Lee'),(5,1925,'The Great Gatsby','https://images.gr-assets.com/books/1490528560m/4671.jpg',NULL,NULL,NULL,'F. Scott Fitzgerald'),(6,2012,'The Fault in Our Stars','https://images.gr-assets.com/books/1360206420m/11870085.jpg',NULL,NULL,NULL,'John Green'),(7,1937,'The Hobbit','https://images.gr-assets.com/books/1372847500m/5907.jpg',NULL,NULL,NULL,'J.R.R. Tolkien'),(8,1951,'The Catcher in the Rye','https://images.gr-assets.com/books/1398034300m/5107.jpg',NULL,NULL,NULL,'J.D. Salinger'),(9,2000,'Angels & Demons  (Robert Langdon, #1)','https://images.gr-assets.com/books/1303390735m/960.jpg',NULL,NULL,NULL,'Dan Brown'),(10,1813,'Pride and Prejudice','https://images.gr-assets.com/books/1320399351m/1885.jpg',NULL,NULL,NULL,'Jane Austen'),(11,2003,'The Kite Runner','https://images.gr-assets.com/books/1484565687m/77203.jpg',NULL,NULL,NULL,'Khaled Hosseini'),(12,2011,'Divergent (Divergent, #1)','https://images.gr-assets.com/books/1328559506m/13335037.jpg',NULL,NULL,NULL,'Veronica Roth'),(13,1949,'1984','https://images.gr-assets.com/books/1348990566m/5470.jpg',NULL,NULL,NULL,'George Orwell, Erich Fromm, Celâl Üster'),(14,1945,'Animal Farm','https://images.gr-assets.com/books/1424037542m/7613.jpg',NULL,NULL,NULL,'George Orwell'),(15,1947,'The Diary of a Young Girl','https://images.gr-assets.com/books/1358276407m/48855.jpg',NULL,NULL,NULL,'Anne Frank, Eleanor Roosevelt, B.M. Mooyaart-Doubleday'),(16,2005,'The Girl with the Dragon Tattoo (Millennium, #1)','https://images.gr-assets.com/books/1327868566m/2429135.jpg',NULL,NULL,NULL,'Stieg Larsson, Reg Keeland'),(17,2009,'Catching Fire (The Hunger Games, #2)','https://images.gr-assets.com/books/1358273780m/6148028.jpg',NULL,NULL,NULL,'Suzanne Collins'),(18,1999,'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)','https://images.gr-assets.com/books/1499277281m/5.jpg',NULL,NULL,NULL,'J.K. Rowling, Mary GrandPré, Rufus Beck'),(19,1954,'The Fellowship of the Ring (The Lord of the Rings, #1)','https://images.gr-assets.com/books/1298411339m/34.jpg',NULL,NULL,NULL,'J.R.R. Tolkien'),(20,2010,'Mockingjay (The Hunger Games, #3)','https://images.gr-assets.com/books/1358275419m/7260188.jpg',NULL,NULL,NULL,'Suzanne Collins'),(21,2003,'Harry Potter and the Order of the Phoenix (Harry Potter, #5)','https://images.gr-assets.com/books/1387141547m/2.jpg',NULL,NULL,NULL,'J.K. Rowling, Mary GrandPré'),(22,2002,'The Lovely Bones','https://images.gr-assets.com/books/1457810586m/12232938.jpg',NULL,NULL,NULL,'Alice Sebold'),(23,1998,'Harry Potter and the Chamber of Secrets (Harry Potter, #2)','https://images.gr-assets.com/books/1474169725m/15881.jpg',NULL,NULL,NULL,'J.K. Rowling, Mary GrandPré'),(24,2000,'Harry Potter and the Goblet of Fire (Harry Potter, #4)','https://images.gr-assets.com/books/1361482611m/6.jpg',NULL,NULL,NULL,'J.K. Rowling, Mary GrandPré'),(25,2007,'Harry Potter and the Deathly Hallows (Harry Potter, #7)','https://images.gr-assets.com/books/1474171184m/136251.jpg',NULL,NULL,NULL,'J.K. Rowling, Mary GrandPré'),(26,2003,'The Da Vinci Code (Robert Langdon, #2)','https://images.gr-assets.com/books/1303252999m/968.jpg',NULL,NULL,NULL,'Dan Brown'),(27,2005,'Harry Potter and the Half-Blood Prince (Harry Potter, #6)','https://images.gr-assets.com/books/1361039191m/1.jpg',NULL,NULL,NULL,'J.K. Rowling, Mary GrandPré'),(28,1954,'Lord of the Flies','https://images.gr-assets.com/books/1327869409m/7624.jpg',NULL,NULL,NULL,'William Golding'),(29,1595,'Romeo and Juliet','https://images.gr-assets.com/books/1327872146m/18135.jpg',NULL,NULL,NULL,'William Shakespeare, Robert           Jackson'),(30,2012,'Gone Girl','https://images.gr-assets.com/books/1339602131m/8442457.jpg',NULL,NULL,NULL,'Gillian Flynn'),(31,2009,'The Help','https://images.gr-assets.com/books/1346100365m/4667024.jpg',NULL,NULL,NULL,'Kathryn Stockett'),(32,1937,'Of Mice and Men','https://images.gr-assets.com/books/1437235233m/890.jpg',NULL,NULL,NULL,'John Steinbeck'),(33,1997,'Memoirs of a Geisha','https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',NULL,NULL,NULL,'Arthur Golden'),(34,2011,'Fifty Shades of Grey (Fifty Shades, #1)','https://images.gr-assets.com/books/1385207843m/10818853.jpg',NULL,NULL,NULL,'E.L. James'),(35,1988,'The Alchemist','https://images.gr-assets.com/books/1483412266m/865.jpg',NULL,NULL,NULL,'Paulo Coelho, Alan R. Clarke'),(36,1993,'The Giver (The Giver, #1)','https://images.gr-assets.com/books/1342493368m/3636.jpg',NULL,NULL,NULL,'Lois Lowry'),(37,1950,'The Lion, the Witch, and the Wardrobe (Chronicles of Narnia, #1)','https://images.gr-assets.com/books/1353029077m/100915.jpg',NULL,NULL,NULL,'C.S. Lewis'),(38,2003,'The Time Traveler\'s Wife','https://images.gr-assets.com/books/1437728815m/14050.jpg',NULL,NULL,NULL,'Audrey Niffenegger'),(39,1996,'A Game of Thrones (A Song of Ice and Fire, #1)','https://images.gr-assets.com/books/1436732693m/13496.jpg',NULL,NULL,NULL,'George R.R. Martin'),(40,2006,'Eat, Pray, Love','https://images.gr-assets.com/books/1503066414m/19501.jpg',NULL,NULL,NULL,'Elizabeth Gilbert'),(41,2005,'The Lightning Thief (Percy Jackson and the Olympians, #1)','https://images.gr-assets.com/books/1400602609m/28187.jpg',NULL,NULL,NULL,'Rick Riordan'),(42,1868,'Little Women (Little Women, #1)','https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',NULL,NULL,NULL,'Louisa May Alcott'),(43,1847,'Jane Eyre','https://images.gr-assets.com/books/1327867269m/10210.jpg',NULL,NULL,NULL,'Charlotte Brontë, Michael Mason'),(44,1996,'The Notebook (The Notebook, #1)','https://images.gr-assets.com/books/1385738917m/15931.jpg',NULL,NULL,NULL,'Nicholas Sparks'),(45,2001,'Life of Pi','https://images.gr-assets.com/books/1320562005m/4214.jpg',NULL,NULL,NULL,'Yann Martel'),(46,2006,'Water for Elephants','https://images.gr-assets.com/books/1494428973m/43641.jpg',NULL,NULL,NULL,'Sara Gruen'),(47,2005,'The Book Thief','https://images.gr-assets.com/books/1390053681m/19063.jpg',NULL,NULL,NULL,'Markus Zusak'),(48,1953,'Fahrenheit 451','https://images.gr-assets.com/books/1351643740m/4381.jpg',NULL,NULL,NULL,'Ray Bradbury'),(49,2006,'New Moon (Twilight, #2)','https://images.gr-assets.com/books/1361039440m/49041.jpg',NULL,NULL,NULL,'Stephenie Meyer'),(50,1974,'Where the Sidewalk Ends','https://images.gr-assets.com/books/1168052448m/30119.jpg',NULL,NULL,NULL,'Shel Silverstein'),(51,2007,'City of Bones (The Mortal Instruments, #1)','https://images.gr-assets.com/books/1432730315m/256683.jpg',NULL,NULL,NULL,'Cassandra Clare'),(52,2007,'Eclipse (Twilight, #3)','https://images.gr-assets.com/books/1361038355m/428263.jpg',NULL,NULL,NULL,'Stephenie Meyer'),(53,2002,'Eragon (The Inheritance Cycle, #1)','https://images.gr-assets.com/books/1366212852m/113436.jpg',NULL,NULL,NULL,'Christopher Paolini'),(54,1979,'The Hitchhiker\'s Guide to the Galaxy (Hitchhiker\'s Guide to the Galaxy, #1)','https://images.gr-assets.com/books/1327656754m/11.jpg',NULL,NULL,NULL,'Douglas Adams'),(55,1932,'Brave New World','https://images.gr-assets.com/books/1487389574m/5129.jpg',NULL,NULL,NULL,'Aldous Huxley'),(56,2008,'Breaking Dawn (Twilight, #4)','https://images.gr-assets.com/books/1361039438m/1162543.jpg',NULL,NULL,NULL,'Stephenie Meyer'),(57,2001,'The Secret Life of Bees','https://images.gr-assets.com/books/1473454532m/37435.jpg',NULL,NULL,NULL,'Sue Monk Kidd'),(58,1884,'The Adventures of Huckleberry Finn','https://images.gr-assets.com/books/1405973850m/2956.jpg',NULL,NULL,NULL,'Mark Twain, John Seelye, Guy Cardwell'),(59,1952,'Charlotte\'s Web','https://images.gr-assets.com/books/1439632243m/24178.jpg',NULL,NULL,NULL,'E.B. White, Garth Williams, Rosemary Wells'),(60,2003,'The Curious Incident of the Dog in the Night-Time','https://images.gr-assets.com/books/1479863624m/1618.jpg',NULL,NULL,NULL,'Mark Haddon'),(61,2015,'The Girl on the Train','https://images.gr-assets.com/books/1490903702m/22557272.jpg',NULL,NULL,NULL,'Paula Hawkins'),(62,1995,'The Golden Compass (His Dark Materials, #1)','https://images.gr-assets.com/books/1451271747m/119322.jpg',NULL,NULL,NULL,'Philip Pullman'),(63,1847,'Wuthering Heights','https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',NULL,NULL,NULL,'Emily Brontë, Richard J. Dunn'),(64,2004,'My Sister\'s Keeper','https://images.gr-assets.com/books/1369504683m/10917.jpg',NULL,NULL,NULL,'Jodi Picoult'),(65,1969,'Slaughterhouse-Five','https://images.gr-assets.com/books/1440319389m/4981.jpg',NULL,NULL,NULL,'Kurt Vonnegut Jr.'),(66,1936,'Gone with the Wind','https://images.gr-assets.com/books/1328025229m/18405.jpg',NULL,NULL,NULL,'Margaret Mitchell'),(67,2007,'A Thousand Splendid Suns','https://images.gr-assets.com/books/1345958969m/128029.jpg',NULL,NULL,NULL,'Khaled Hosseini'),(68,1999,'The Perks of Being a Wallflower','https://images.gr-assets.com/books/1167352178m/22628.jpg',NULL,NULL,NULL,'Stephen Chbosky'),(69,2012,'Insurgent (Divergent, #2)','https://images.gr-assets.com/books/1325667729m/11735983.jpg',NULL,NULL,NULL,'Veronica Roth'),(70,1985,'Ender\'s Game (Ender\'s Saga, #1)','https://images.gr-assets.com/books/1408303130m/375802.jpg',NULL,NULL,NULL,'Orson Scott Card'),(71,1818,'Frankenstein','https://images.gr-assets.com/books/1381512375m/18490.jpg',NULL,NULL,NULL,'Mary Wollstonecraft Shelley, Percy Bysshe Shelley, Maurice Hindle'),(72,1977,'The Shining (The Shining #1)','https://images.gr-assets.com/books/1353277730m/11588.jpg',NULL,NULL,NULL,'Stephen King'),(73,2008,'The Host (The Host, #1)','https://images.gr-assets.com/books/1318009171m/1656001.jpg',NULL,NULL,NULL,'Stephenie Meyer'),(74,2005,'Looking for Alaska','https://images.gr-assets.com/books/1394798630m/99561.jpg',NULL,NULL,NULL,'John Green'),(75,1996,'Bridget Jones\'s Diary (Bridget Jones, #1)','https://images.gr-assets.com/books/1292060045m/227443.jpg',NULL,NULL,NULL,'Helen Fielding'),(76,1811,'Sense and Sensibility','https://images.gr-assets.com/books/1397245675m/14935.jpg',NULL,NULL,NULL,'Jane Austen, Tony Tanner, Ros Ballaster'),(77,1998,'Holes (Holes, #1)','https://images.gr-assets.com/books/1327781893m/38709.jpg',NULL,NULL,NULL,'Louis Sachar, Louis Sachar'),(78,2003,'The Devil Wears Prada (The Devil Wears Prada, #1)','https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',NULL,NULL,NULL,'Lauren Weisberger'),(79,-720,'The Odyssey','https://images.gr-assets.com/books/1390173285m/1381.jpg',NULL,NULL,NULL,'Homer, Robert Fagles, E.V. Rieu, Frédéric Mugler, Bernard Knox'),(80,1946,'The Little Prince','https://images.gr-assets.com/books/1367545443m/157993.jpg',NULL,NULL,NULL,'Antoine de Saint-Exupéry, Richard Howard, Dom Marcos Barbosa, Melina Karakosta'),(81,2005,'The Glass Castle','https://images.gr-assets.com/books/1400930557m/7445.jpg',NULL,NULL,NULL,'Jeannette Walls'),(82,1996,'Into the Wild','https://images.gr-assets.com/books/1403173986m/1845.jpg',NULL,NULL,NULL,'Jon Krakauer'),(83,1859,'A Tale of Two Cities','https://images.gr-assets.com/books/1344922523m/1953.jpg',NULL,NULL,NULL,'Charles Dickens, Richard Maxwell, Hablot Knight Browne'),(84,1990,'Jurassic Park (Jurassic Park, #1)','https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',NULL,NULL,NULL,'Michael Crichton'),(85,1964,'The Giving Tree','https://images.gr-assets.com/books/1174210942m/370493.jpg',NULL,NULL,NULL,'Shel Silverstein'),(86,1989,'A Time to Kill','https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',NULL,NULL,NULL,'John Grisham'),(87,1958,'Night (The Night Trilogy #1)','https://images.gr-assets.com/books/1473495285m/1617.jpg',NULL,NULL,NULL,'Elie Wiesel, Marion Wiesel'),(88,2008,'Paper Towns','https://images.gr-assets.com/books/1349013610m/6442769.jpg',NULL,NULL,NULL,'John Green'),(89,1973,'The Princess Bride ','https://images.gr-assets.com/books/1327903636m/21787.jpg',NULL,NULL,NULL,'William Goldman'),(90,1967,'The Outsiders','https://images.gr-assets.com/books/1442129426m/231804.jpg',NULL,NULL,NULL,'S.E. Hinton'),(91,2009,'The Maze Runner (Maze Runner, #1)','https://images.gr-assets.com/books/1375596592m/6186357.jpg',NULL,NULL,NULL,'James Dashner'),(92,2005,'Freakonomics: A Rogue Economist Explores the Hidden Side of Everything (Freakonomics, #1)','https://images.gr-assets.com/books/1327909092m/1202.jpg',NULL,NULL,NULL,'Steven D. Levitt, Stephen J. Dubner'),(93,1911,'The Secret Garden','https://images.gr-assets.com/books/1327873635m/2998.jpg',NULL,NULL,NULL,'Frances Hodgson Burnett'),(94,1967,'One Hundred Years of Solitude','https://images.gr-assets.com/books/1327881361m/320.jpg',NULL,NULL,NULL,'Gabriel García Márquez, Gregory Rabassa'),(95,1891,'The Picture of Dorian Gray','https://images.gr-assets.com/books/1424596966m/5297.jpg',NULL,NULL,NULL,'Oscar Wilde, Jeffrey Eugenides'),(96,2012,'Fifty Shades Freed (Fifty Shades, #3)','https://images.gr-assets.com/books/1336418837m/13536860.jpg',NULL,NULL,NULL,'E.L. James'),(97,1897,'Dracula','https://images.gr-assets.com/books/1387151694m/17245.jpg',NULL,NULL,NULL,'Bram Stoker, Nina Auerbach, David J. Skal'),(98,2006,'The Girl Who Played with Fire (Millennium, #2)','https://images.gr-assets.com/books/1351778881m/5060378.jpg',NULL,NULL,NULL,'Stieg Larsson, Reg Keeland'),(99,2011,'Fifty Shades Darker (Fifty Shades, #2)','https://images.gr-assets.com/books/1358266080m/11857408.jpg',NULL,NULL,NULL,'E.L. James');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-16 20:37:49
