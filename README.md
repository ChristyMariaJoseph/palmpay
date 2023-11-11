# Contactless Payment using Palm vein technology
Hi. This is my Final Year B.tech Project, Contactless Payment using Palm vein technology. 

The project contains maily three modules:
<li>Palm Scanner Hardware setup</li>
<li>Image Processing, Dataset Creation and testing</li>
<li>Payment Gateway Prototype</li>
<br>

The hardware setup majorly consists of a Raspberry Pi and 8MP Raspberry Pi NoIR Camera to capture the images of the palm. 
The captured images are then processed to extract the vein patterns. 
Datasets of 25 Individuals were created which were then used to train the model for payment authentication and then tested against the sample images. The Image processing, Dataset creation and user authentication were all done using Amazon Web Services. AWS Rekognition was used to train the model for payment authentication.
A Payment gateway protopye was created to showcase the deduction of some amount from the user account after successful user authentication. 

Despite challenges related to project timelines, the successful completion of the dataset creation and verification of user authentication stands as a testament to the project's feasibility and reliability.
