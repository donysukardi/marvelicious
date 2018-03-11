import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import md5 from 'md5';
import withAuth from '../stateContainers/withAuth';

const Wrapper = styled.header`
  display: flex;
  padding: 1.5rem 0;
  justify-content: space-between;
  align-items: center;
`;

const UserAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 0.5rem;
`;

const Greeting = styled.div`
  display: inline-block;
  color: white;
`;

const LogoutButton = styled.button`
  background: transparent;
  border: none;
  color: white;
`;

const EmojiWrapper = styled.div`
  transform: scaleX(-1);
  display: inline-block;
  font-size: 1.5rem;
  vertical-align: middle;
  margin-left: 0.5rem;
`;

const Header = ({ auth, onLogout }) => {
  const { user } = auth.state;
  const emailHash = md5(user.email);
  const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?s=200`;

  return (
    <Wrapper>
      <div>
        <UserAvatar alt="avatar" src={gravatarUrl} />
        <Greeting>Welcome {user.email}</Greeting>
      </div>
      <div>
        <LogoutButton onClick={onLogout}>
          Logout
          <EmojiWrapper>
            <span role="img" aria-label="Man running emoji">
              🏃‍💨
            </span>
          </EmojiWrapper>
        </LogoutButton>
      </div>
    </Wrapper>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default withAuth(Header);
