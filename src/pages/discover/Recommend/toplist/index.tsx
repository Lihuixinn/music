import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, Spin } from 'antd';

interface Song {
  id: number;
  name: string;
  artist: string;
}

const Billboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    // 发起HTTP请求获取榜单数据
    axios.get('https://your-api-endpoint.com/billboard')
      .then(response => {
        setSongs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error: ', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Spin />
      ) : (
        <List
          dataSource={songs}
          renderItem={(song: Song) => (
            <List.Item>
              <List.Item.Meta
                title={song.name}
                description={song.artist}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Billboard;