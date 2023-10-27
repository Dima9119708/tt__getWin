import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import {
  Avatar, Chip, Divider, Grid, IconButton, Skeleton, Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { getColorStat } from 'pages/PokemonDetails/lib/getColorStat';
import { getPokemonDetailsRequest } from '../service/pokemonDetailsService';

const PokemonDetails = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const isLoading = useAppSelector((state) => state.pokemonDetails.isLoading);
  const name = useAppSelector((state) => state.pokemonDetails.data.name);
  const moves = useAppSelector((state) => state.pokemonDetails.data.moves);
  const stats = useAppSelector((state) => state.pokemonDetails.data.stats);
  const imgSrc = useAppSelector((state) => state.pokemonDetails.data.sprites.front_default);

  useEffect(() => {
    if (params.id) {
      dispatch(getPokemonDetailsRequest(params.id));
    }
  }, [dispatch, params.id]);

  const onBack = useCallback(() => navigate(-1), [navigate]);

  return (
    <div>
      <IconButton className="mb-[3rem]" onClick={onBack}>
        <ArrowCircleLeftIcon className="h-[4rem] w-[4rem]" color="info" />
      </IconButton>

      <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
          { isLoading
            ? <Skeleton variant="circular" className="h-[25rem] w-[25rem]" />
            : (
              <Avatar
                src={imgSrc}
                className="h-[25rem] w-[25rem]"
              />
            )}
        </Grid>

        <Grid item flex="1" xs={12} lg={8}>
          {
            isLoading
              ? <Skeleton variant="rounded" className="h-[5rem]" />
              : (
                <Typography variant="h1" className="text-[3rem] mb-[2rem] h-auto">
                  {name}
                </Typography>
              )
          }

          <Divider className="mb-[2rem]" />

          <div className="mb-[2rem]">
            { !!stats.length && (
              <Typography className="mb-[1rem]" variant="h6">
                Stats:
              </Typography>
            )}

            <div className="flex flex-wrap gap-[1rem]">
              {
                isLoading && Array.from({ length: 10 }, (_, idx) => (
                  <Skeleton key={idx} variant="rounded" className="w-[3rem] h-[3rem]" />
                ))
              }

              {
                !isLoading && stats.map((stat) => (
                  <Chip
                    key={stat.stat.url}
                    color={getColorStat(stat.base_stat)}
                    label={`${stat.stat.name} - ${stat.base_stat}`}
                  />
                ))
              }
            </div>
          </div>

          <Divider className="mb-[2rem]" />

          <div className="mb-[2rem]">
            { !!moves.length && (
              <Typography className="mb-[1rem]" variant="h6">
                Moves:
              </Typography>
            )}

            <div className="flex flex-wrap gap-[1rem]">
              {
                isLoading && Array.from({ length: 10 }, (_, idx) => (
                  <Skeleton key={idx} variant="rounded" className="w-[3rem] h-[3rem]" />
                ))
              }

              {
                !isLoading && moves.map(((move) => (
                  <Chip key={move.move.url} label={move.move.name} />
                )))
              }
            </div>

          </div>

          <Divider />
        </Grid>

      </Grid>
    </div>
  );
};

export default PokemonDetails;
