import { CastList, CastItem, Paragraph } from './CastGallery.styled';
import imageNotFound from '../../images/imgNotFound.png';

export const CastGallery = ({ credits }) => {
  return (
    <>
      <CastList>
        {credits === null ? (
          <Paragraph>Oops! We don't have any information about casts for this movie.</Paragraph>
        ) : (
          credits.map(({ id, profile_path, name, character }) => {
            return (
              <CastItem key={id}>
                <img
                  src={
                    profile_path === null
                      ? imageNotFound
                      : `https://image.tmdb.org/t/p/w500/${profile_path}`
                  }
                  alt={name} width="235 px"
                />
                <Paragraph>{name}</Paragraph>
                <Paragraph>Character: {character}</Paragraph>
              </CastItem>
            );
          }))}
      </CastList>
    </>
  );
};
