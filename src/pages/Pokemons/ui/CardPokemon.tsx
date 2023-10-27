import {
  Button, CardActions, CardContent, Tooltip, Typography, Card as MuiCard, Grid,
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
    <MuiCard className="cursor-pointer" onClick={onReadMore}>
      <CardContent>
        <Tooltip title={name}>
          <Typography variant="h5" component="div" noWrap>
            { name }
          </Typography>
        </Tooltip>

      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </MuiCard>
  );
};

export default memo(CardPokemon);
