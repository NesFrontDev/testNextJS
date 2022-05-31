import styles from '../styles/Home.module.css'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Home() {
  
  const [expanded, setExpanded] = React.useState(false);
  const data =[
    {
      avatar:'a',
      avatarColor:'red',
      img:'https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/71/51407ee9b404ffd84ebe/compressed_Summer_20paella.jpg',
      title:'Shrimp and Chorizo Paella',
      subheader:'September 14, 2022',
      alt:'Paella dish',
      post:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,',
      method1:'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.',
      method2:'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
      method3:'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don&apos;t open.)',
      method4:'Set aside off of the heat to let rest for 10 minutes, and then serve.'
    },
    {
      avatar:'b',
      avatarColor:'green',
      img:'https://www.expatica.com/app/uploads/sites/5/2014/05/french-onion-soup.jpg',
      title:'Soupe à l’oignon',
      subheader:'August 3, 2022',
      alt:'Soupe',
      post:'This is a traditional French soup made of onions and beef stock, usually served with croutons and melted cheese on top.',
      method1:'Dating back to Roman times this was traditionally a peasant dish although the current version dates from the 18th century. The soup’s unique flavor comes from the caramelization of the onions, which often have brandy or sherry added during the slow-cooking process.',
      method2:'If you’re in a soup mood, why not try Marseille’s traditional soupe de poisson à la rouille.',
      method3:'Once a fisherman’s favorite, this soup is characterized by a dollop of garlic and saffron mayonnaise placed on top.'
    },
    {
      avatar:'c',
      avatarColor:'pink',
      img:'https://www.expatica.com/app/uploads/sites/5/2014/05/coq-au-vin-1.jpg',
      title:'Coq au vin',
      subheader:'March 9, 2022',
      alt:'Soupe',
      post:'This quintessential French food was popularized by Julia Child, becoming one of her signature dishes.',
      method1:'The dish sees chicken braised with wine, mushrooms, salty pork or bacon (lardons), mushrooms, onions, garlic and sometimes even a drop of brandy. Although the name translates as ‘rooster in wine’ – the braising is ideal for tougher birds – the recipe usually uses chicken or capon. ',
      method2:'Burgundy, although regional variations of the dish exist across France that use local wines. These include coq au vin jaune (Jura), coq au Riesling (Alsace), and coq au pourpre (Beaujolais nouveau).',
      method3:'it or not, there’s even a coq au Champagne (Champagne).'
    },
    {
      avatar:'d',
      avatarColor:'gay',
      img:'https://www.expatica.com/app/uploads/sites/5/2014/05/cassoulet.jpg',
      title:'Cassoulet',
      subheader:'June 22, 2022',
      alt:'Cassoulet',
      post:'Cassoulet is a comfort dish of white beans stewed slowly with meat. The dish typically uses pork or duck but can include sausages,',
      method1:' goose, mutton or whatever else the chef has lying around. This peasant dish originates from southern France and is popular in Toulouse, Carcassonne, and Castelnaudary. The name of the dish comes from the pot (cassole) that it’s traditionally baked in.',
      method2:'This pot is a staple in many French homes, highlighting the popularity of this rich, hearty meal that’s perfect for those colder months.',
      
    },
    {
      avatar:'e',
      avatarColor:'blue',
      img:'https://www.expatica.com/app/uploads/sites/5/2014/05/boeuf-bourguignon.jpg',
      title:'Bœuf bourguignon',
      subheader:'October 28, 2022',
      alt:'Bœuf bourguignon',
      post:'Dishes don’t get much more typically French than bœuf bourguignon. The dish hails from the same region as coq au vin – that’s Burgundy in eastern France – and there are similarities between the two dishes.',
      method1:'Bœuf bourguignon is essentially a stew made from beef braised in red wine, beef broth, and seasoned vegetables including pearl onions and mushrooms. Originally a peasant dish, this recipe is now a staple in French restaurants around the world. Traditionally, the cheap cuts of meat would be tenderized in wine for two days to intensify the flavors, although some shortcuts can be taken. ',
      method2:'Every August in Burgundy, the Fête du Charolais celebrates the dish, along with plenty of music and wine.',
      
    },
    {
      avatar:'f',
      avatarColor:'orange',
      img:'https://www.expatica.com/app/uploads/sites/5/2014/05/chocolate-souffle%CC%81.jpg',
      title:'Chocolate soufflé',
      subheader:'January 30, 2022',
      alt:'Bœuf bourguignon',
      post:'The word soufflé comes from the French verb ‘to blow’ and, as the name suggests, this is a light, airy dessert. ',
      method1:' The dish dates back to the early 18th century and nowadays is a staple on dessert menus around the world. The crispy chocolatey crust is perfect for letting the creamy chocolate ooze out for a rich surprise. However, it doesn’t have to be sweet. In fact, cheese soufflés are just as delicious if you’re looking for something a little saltier.',
      
    }

  ]

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return(
    <Grid container sx={{ flexGrow: 1 }} justifyContent="center"direction="row" spacing={3} padding="20px" marginTop="10px" >
      {data.map((item,index) => (
        <Grid item key={index}>
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:`${item.avatarColor}`}} aria-label="recipe">
              {item.avatar}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={item.title}
          subheader={item.subheader}
        />
        <CardMedia
          component="img"
          height="194"
          image={item.img}
          alt={item.alt}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.post}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              {item.method1}
            </Typography>
            <Typography paragraph>
            {item.method2}
              
            </Typography>
            <Typography paragraph>
            {item.method3}
              
            </Typography>
            <Typography>
            {item.method4}
              
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </Grid>
      ))}
      
    </Grid>

    
  ) 
}
