const Avatar = ({ image }) => {
  return (
    <AvatarWrapper>
      <AvatarImage source={image} />
      <AddAvatarButtonWrapper>
        <AddAvatarButtonImage source={addImage} />
      </AddAvatarButtonWrapper>
    </AvatarWrapper>
  );
};

export default Avatar;
