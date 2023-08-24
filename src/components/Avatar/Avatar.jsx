const Avatar = ({ image }) => {
  return (
    <AvatarWrapper>
      <AvatarImage src={image} />
      <AddAvatarButtonWrapper>
        <AddAvatarButtonImage source={addImage} />
      </AddAvatarButtonWrapper>
    </AvatarWrapper>
  );
};

export default Avatar;
