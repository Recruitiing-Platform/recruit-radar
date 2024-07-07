import React from 'react'
import { Button } from './ui/button'

type Props = {}

const HeroSectionComponent = (props: Props) => {
  return (
    <div>
        <h1>Your Best Recruiting System!</h1>
        <p>Recruit Radar helps in connecting job seekers to their dream jobs and employers to top-notch candidates with trusted and structured matching system.</p>
        <div>
            <Button>Find your next hire</Button>
            <Button>Find your next job</Button>
        </div>
    </div>
  )
}

export default HeroSectionComponent