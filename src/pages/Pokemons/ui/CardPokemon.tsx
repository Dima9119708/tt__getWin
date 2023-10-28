import {
  Button, CardActions, CardContent, Tooltip, Typography, Card as MuiCard, Fade, Avatar,
} from '@mui/material';
import { Pokemon } from 'pages/Pokemons/model/types/pokemonsTypes';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProps extends Pokemon {
}

const CardPokemon = (props: CardProps) => {
  const { id, name } = props;
  const navigate = useNavigate();

  const onReadMore = () => navigate(`pokemon/${id}`);

  return (
    <Fade in timeout={400}>
      <MuiCard className="cursor-pointer" onClick={onReadMore}>
        <Avatar
          alt={name}
          className="h-[10rem] w-full"
          imgProps={{ className: 'object-contain' }}
          variant="rounded"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
        <CardContent>
          <Tooltip title={name}>
            <Typography variant="h5" component="div" noWrap>
              { name }
            </Typography>
          </Tooltip>

        </CardContent>
        <CardActions className="justify-end">
          <Button variant="outlined" size="small">Learn More</Button>
        </CardActions>
      </MuiCard>
    </Fade>
  );
};

export default memo(CardPokemon);
