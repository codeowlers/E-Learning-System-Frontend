import React, { useCallback, useEffect, useState } from 'react'
import { CoursesContainer } from '../courses'
import { getCourses } from '../../../api'

const PersonalizedSearchCourses = () => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const fetchPersonalizedCourses = useCallback(async () => {
    try {
      const response = await getCourses(2, 10)
      setCourses(response.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPersonalizedCourses()
  }, [])
  return (
    <CoursesContainer
      courses={courses}
      loading={loading}
      title="Personalized Search"
      description="JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. "
    />
  )
}

export default PersonalizedSearchCourses