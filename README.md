## oREV: an Item Response Theory based open receptive vocabulary task for 3 to 8-year-old children

------------------------------------------------------------------------

> Website script and materials associated with the following manuscript

------------------------------------------------------------------------

* Bohn, M., Prein, J., Delikaya, B., Haun, D. B. M., & Gagarina, N. (2022). [oREV: an Item Response Theory based open receptive vocabulary task for 3 to 8-year-old children](https://psyarxiv.com/4z86w). *PsyArXiv*.

### Usage

Link to task (in German): [oREV](https://ccp-odc.eva.mpg.de/orev-demo/)

### Structure

```
.
├── fetchdata                   <-- scripts for uploading data to server
    ├── data.php              
    ├── upload_video.php      
├── public                      
    ├── audio                   <-- all audio prompts
    ├── data                    <-- folder where participant data will be saved 
    ├── images                  <-- all stimulus pictures  
    ├── logos 
    ├── movies
├── src                         <-- folder containing all CSS and JavaScript for functionality
└── ...some more config files                      

```


### Development

Development requires [Node.js](https://nodejs.org/en/)

#### Local Development

1. `git clone git@github.com:ccp-eva/orev-demo.git`
1. `npm install`
1. `npm start`

#### Deploy Application To A Server

1. `git clone git@github.com:ccp-eva/orev-demo.git`
1. `npm install`
1. `npm run build`
1. Upload the contents within the `dist` folder to your web hoster.
