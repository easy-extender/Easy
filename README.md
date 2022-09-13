# Easy Toolkit

A light weight toolkit that makes easier to develop unity projects.

### Table of Contents

- [Easy Toolkit](#easy-toolkit)
    - [Table of Contents](#table-of-contents)
  - [Quick Start](#quick-start)
  - [e.[shortcut]](#eshortcut)
  - [AudioPlayer](#audioplayer)
      - [Play](#play)
      - [Stop](#stop)
      - [Volume](#volume)
      - [Mute](#mute)
      - [Output](#output)
      - [Toggle Mute](#toggle-mute)
  - [Events](#events)
      - [On](#on)
      - [Once](#once)
      - [Off](#off)
      - [Emit](#emit)
      - [Remove](#remove)
      - [Remove All](#remove-all)
      - [Remove All (by prefix)](#remove-all-by-prefix)
      - [Names](#names)
      - [Names (by prefix)](#names-by-prefix)
      - [CleanUp](#cleanup)
      - [Events Count](#events-count)
  - [Follow](#follow)
      - [Follow](#follow-1)
      - [Stop Follow](#stop-follow)
  - [Random](#random)
      - [bool](#bool)
      - [int](#int)
      - [float](#float)
      - [double](#double)
      - [Item](#item)
      - [index](#index)
      - [Vector2](#vector2)
      - [Vector3](#vector3)
  - [Math](#math)
      - [Constants](#constants)
      - [To Radian](#to-radian)
      - [To Degree](#to-degree)
      - [Absolute](#absolute)
      - [Clamp](#clamp)
      - [Lerp](#lerp)
      - [LerpUnclamped](#lerpunclamped)
      - [Sin](#sin)
      - [Asin](#asin)
      - [Cos](#cos)
      - [Acos](#acos)
      - [Tan](#tan)
      - [Atan](#atan)
      - [Pow](#pow)
      - [Min](#min)
      - [Max](#max)
      - [Floor](#floor)
      - [Ceiling](#ceiling)
      - [Round](#round)
      - [Sqrt (Square Root)](#sqrt-square-root)
      - [Sign](#sign)
  - [Timers](#timers)
      - [Timeout](#timeout)
      - [Interval](#interval)
      - [Stop Timer](#stop-timer)



<br>

## Quick Start

Import the `namespace`:

```cs
using Easy;
```

Use the shortcuts via the `e.[shortcut]`:

```cs
e.RandomFloat()
```
```cs
e.SetTimeout(...)
```
```cs
e.Play(clip)
```
```cs
e.Max(1, 2, 3)
```



<br>

## e.[shortcut]

```cs
public static class e {...}
```

`e` is a `static class` that contains list of shortcut methods, so to use api you can simply write `e.[shortcut]`, another benefit of using `e` class is to makes your code easier to read, because it will pop out all the `easy api` calls within your source code.



<br>

## AudioPlayer

AudioPlayer is a tool to play `AudioClip` in the 2D space.

```cs
public static class AudioPlayer {...}
```

<br>

#### Play

To play an `AudioClip` via `AudioPlayer` you can use:

```cs
void AudioPlayer.Play(AudioClip clip)
```
```cs
void AudioPlayer.Play(AudioClip clip, float volume)
```
```cs
void e.Play(AudioClip clip)
```
```cs
void e.Play(AudioClip clip, float volume)
```

> Examples:
> 
> ```cs
> e.Play(clip, 0.5f);
> ```
> ```cs
> AudioPlayer.Play(clip, 0.5f);
> ```

<br>

#### Stop

To stop all the playing clips of the `AudioPlayer` use:

```cs
void AudioPlayer.Stop()
```

> Examples:
>
> ```cs
> AudioPlayer.Stop();
> ```

<br>

#### Volume

To read or change volume of the `AudioPlayer` use volume property:

```cs
float AudioPlayer.volume { get; set; }
```

> Examples:
> 
> ```cs
> AudioPlayer.volume = 0.5f;
> ```

<br>

#### Mute

To read or change mute/unmute state of the `AudioPlayer` use mute property:

```cs
bool AudioPlayer.mute { get; set; }
```

> Examples:
> 
> ```cs
> AudioPlayer.mute = true;
> ```

<br>

#### Output

To read or change target mixer group of the `AudioPlayer` use output property:

```cs
AudioMixerGroup AudioPlayer.output { get; set; }
```

> Examples:
> 
> ```cs
> AudioPlayer.output = master;
> ```

<br>

#### Toggle Mute

To toggle mute state of the `AudioPlayer` use:

```cs
bool AudioPlayer.ToggleMute()
```

> Examples:
> 
> ```cs
> var isMute = AudioPlayer.ToggleMute();
> ```



<br>

## Events

Event manger is an useful service that make it easy to emiting event in your all active scenes. (supports additive scenes as well)

```cs
public static class GameEvents {...}
```


<br>

#### On

To add an `event listener` use:

```cs
void GameEvents.On(string eventName, Action<object> listener)
```

```cs
void e.On(string eventName, Action listener)
```
```cs
void e.On(string eventName, Action<bool> listener)
```
```cs
void e.On(string eventName, Action<int> listener)
```
```cs
void e.On(string eventName, Action<float> listener)
```
```cs
void e.On(string eventName, Action<string> listener)
```
```cs
void e.On<T>(string eventName, Action<T> listener)
```

> Examples:
> 
> ```cs
> e.On("Pause", OnPause);
> 
> void OnPause(bool paused) {...}
> ```


<br>

#### Once

To add an `event listener` just for next emit use:

```cs
void GameEvents.Once(string eventName, Action<object> listener)
```
```cs
void e.Once(string eventName, Action listener)
```
```cs
void e.Once(string eventName, Action<bool> listener)
```
```cs
void e.Once(string eventName, Action<int> listener)
```
```cs
void e.Once(string eventName, Action<float> listener)
```
```cs
void e.Once(string eventName, Action<string> listener)
```
```cs
void e.Once<T>(string eventName, Action<T> listener)
```

> Examples:
> 
> ```cs
> e.Once("GameOver", OnGameOver);
> 
> void OnGameOver() {...}
> ```


<br>

#### Off

To remove an `event listener` use:

```cs
void GameEvents.Off(string eventName, Action<object> listener)
```
```cs
void e.Off(string eventName, Action listener)
```
```cs
void e.Off(string eventName, Action<bool> listener)
```
```cs
void e.Off(string eventName, Action<int> listener)
```
```cs
void e.Off(string eventName, Action<float> listener)
```
```cs
void e.Off(string eventName, Action<string> listener)
```
```cs
void e.Off<T>(string eventName, Action<T> listener)
```

> Examples:
> 
> ```cs
> e.Off("GameOver", OnGameOver);
>
> void OnGameOver() {...}
> ```


<br>

#### Emit

To emit an `event` use:

```cs
void GameEvents.Emit(string eventName, object data)
```
```cs
void e.Emit(string eventName)
```
```cs
void e.Emit<T>(string eventName, T data)
```

> Examples:
> 
> ```cs
> GameEvents.Emit("GameOver");
> ```
> ```cs
> e.Emit("Pause", true);
> ```


<br>

#### Remove

To remove an event use:

```cs
void GameEvents.Remove(string eventName)
```
```cs
void e.RemoveEvent(string eventName)
```

> Examples:
> 
> ```cs
> GameEvents.Remove("GameOver");
> ```
> ```cs
> e.RemoveEvent("Pause");
> ```


<br>

#### Remove All

To remove all registered events use:

```cs
void GameEvents.RemoveAll()
```

> Examples:
> 
> ```cs
> GameEvents.RemoveAll();
> ```


<br>

#### Remove All (by prefix)

To remove all registered events those their names starts with a prefix use:

```cs
void GameEvents.RemoveAll(string prefix)
```

> Examples:
> 
> ```cs
> // registered events
> e.On("Map/Pause", OnPause);
> e.On("Map/GameOver", OnGameOver);
> e.On("Map/LoadLevel", OnLoadLevel);
>
> // remove them all at once
> GameEvents.RemoveAll("Map");
> ```


<br>

#### Names

To get names of all registered events use:

```cs
string[] GameEvents.GetNames()
```

> Examples:
> 
> ```cs
> var eventNames = GameEvents.GetNames();
> ```


<br>

#### Names (by prefix)

To get names of all registered events those their names starts with a prefix use:

```cs
string[] GameEvents.GetNames(string prefix)
```

> Examples:
> 
> ```cs
> var eventNames = GameEvents.GetNames("Map");
> ```


<br>

#### CleanUp

To remove all empty events use:

```cs
void GameEvents.CleanUp()
```

> Examples:
> 
> ```cs
> void OnSceneChange() {
>     GameEvents.CleanUp();
> }
> ```


<br>

#### Events Count

To get how many events registered use:

```cs
int GameEvents.count { get; }
```

> Examples:
> 
> ```cs
> var eventsCount = GameEvents.count;
> ```



<br>

## Follow

Follow tool let you bind a `Transfrom` to another one:

```cs
interface IFollower { }
```


<br>

#### Follow

```cs
IFollower e.Follow(Transform follower, Transform target)
```
```cs
IFollower e.Follow(Transform follower, Transform target, bool keepDistance)
```
```cs
IFollower e.Follow(Transform follower, Transform target, Vector3 offset)
```
```cs
IFollower e.Follow(Transform follower, Transform target, Action<Transform, Transform> method)
```

> Examples:
> 
> ```cs
> e.Follow(transform, player);
> ```


<br>

#### Stop Follow

To remove the following `behaviour` use:

```cs
void e.StopFollow(Transform follower)
```
```cs
void e.StopFollow(IFollower follower)
```

> Examples:
> 
> ```cs
> e.StopFollow(transform);
> ```
> ```cs
> var f = e.Follow(transform, player);
> 
> e.StopFollow(f);
> ```



<br>

## Random

To create random `primitive` values use:


<br>

#### bool

```cs
bool e.RandomBool()
```
```cs
// weight is between 0.0 to 1.0
// 0 mean always false
// 1 mean always true
bool e.RandomBool(float weight)
```

> Examples:
> 
> ```cs
> var b = e.RandomBool();
> ```
> ```cs
> var b = e.RandomBool(0.6f);
> ```


<br>

#### int

```cs
// 0 (inclusive) to int.MaxValue (exclusive)
int e.RandomInt()
```
```cs
// 0 (inclusive) to max (exclusive)
int e.RandomInt(int max)
```
```cs
// min (inclusive) to max (exclusive)
int e.RandomInt(int min, int max)
```
```cs
// range.x (inclusive) to range.y (exclusive)
int e.RandomInt(Vector2Int range)
```

> Examples:
> 
> ```cs
> var i = e.RandomInt();
> ```
> ```cs
> var i = e.RandomInt(10, 20);
> ```


<br>

#### float

```cs
// 0 (inclusive) to 1 (exclusive)
float e.RandomFloat()
```
```cs
// 0 (inclusive) to max (exclusive)
float e.RandomFloat(float max)
```
```cs
// min (inclusive) to max (exclusive)
float e.RandomFloat(float min, float max)
```
```cs
// range.x (inclusive) to range.y (exclusive)
float e.RandomFloat(Vector2 range)
```

> Examples:
> 
> ```cs
> var f = e.RandomFloat();
> ```
> ```cs
> var f = e.RandomFloat(10f, 20f);
> ```


<br>

#### double

```cs
// 0 (inclusive) to 1 (exclusive)
double e.RandomDouble()
```

> Examples:
> 
> ```cs
> var d = e.RandomDouble();
> ```


<br>

#### Item

```cs
// random item of an array
T e.RandomItem<T>(T[] array)
```
```cs
// random item of a list
T e.RandomItem<T>(List<T> list)
```

> Examples:
> 
> ```cs
> int[] array = ...
> 
> var i = e.RandomItem(array);
> ```
> ```cs
> List<float> list = ...
>
> var i = e.RandomItem(list);
> ```


<br>

#### index

```cs
// 0 to (array.Length - 1) (inclusive)
int e.RandomIndex<T>(T[] array)
```
```cs
// 0 to (list.Count - 1) (inclusive)
int e.RandomIndex<T>(List<T> list)
```

> Examples:
> 
> ```cs
> int[] array = ...
> 
> var i = e.RandomIndex(array);
> ```
> ```cs
> List<float> list = ...
>
> var i = e.RandomIndex(list);
> ```


<br>


#### Vector2

```cs
// point inside the unit circle
Vector2 e.RandomVector2()
```
```cs
// point inside the circle with specified radius
Vector2 e.RandomVector2(float radius)
```
```cs
// point on the circumference of the unit circle
Vector2 e.RandomNormal2()
```

> Examples:
> 
> ```cs
> var v = e.RandomVector2();
> ```
> ```cs
> var v = e.RandomVector2(5f);
> ```
> ```cs
> var v = e.RandomNormal2();
> ```


<br>


#### Vector3

```cs
// point inside the unit shpere
Vector3 e.RandomVector3()
```
```cs
// point inside the shpere with specified radius
Vector3 e.RandomVector3(float radius)
```
```cs
// point on the surface of the unit shpere
Vector3 e.RandomNormal3()
```

> Examples:
> 
> ```cs
> var v = e.RandomVector3();
> ```
> ```cs
> var v = e.RandomVector3(5f);
> ```
> ```cs
> var v = e.RandomNormal3();
> ```




<br>

## Math

A list of easy access mathematical tools:


<br>

#### Constants

```cs
// the π value
const float e.PI
```
```cs
// degree to radian conversion constant
const float e.D2R
```
```cs
// radian to degree conversion constant
const float e.R2D
```

> Examples:
> 
> ```cs
> var circumference = 2 * e.PI * radius;
> ```
> ```cs
> var radian = e.D2R * 180;
> ```
> ```cs
> var degree = e.R2D * radian;
> ```


<br>

#### To Radian

Another way to convert degree to radian is:

```cs
float e.Radian(float degree)
```
```cs
double e.Radian(double degree)
```

> Examples:
> 
> ```cs
> var radian = e.Radian(180);
> ```


<br>

#### To Degree

Another way to convert radian to degree is:

```cs
float e.Degree(float radian)
```
```cs
double e.Degree(double radian)
```

> Examples:
> 
> ```cs
> var degree = e.Degree(radian);
> ```


<br>

#### Absolute

To get absolute value of a value use:

```cs
int e.Abs(int value)
```
```cs
float e.Abs(float value)
```
```cs
double e.Abs(double value)
```
```cs
long e.Abs(long value)
```

> Examples:
> 
> ```cs
> var abs = e.Abs(-123);
> ```


<br>

#### Clamp

To clamp a value between min and max use:

```cs
int e.Clamp(int value, int min, int max)
```
```cs
float e.Clamp(float value, float min, float max)
```
```cs
float e.Clamp01(float value)
```

> Examples:
> 
> ```cs
> var val = 150;
> 
> var res = e.Clamp(val, 0, 100);
> ```
> ```cs
> var val = 1.5f;
> 
> var res = e.Clamp01(val);
> ```


<br>

#### Lerp

Interpolation between two value (`t` gets clamped from 0 to 1):

```cs
float e.Lerp(float a, float b, float t)
```
```cs
Vector2 e.Lerp(Vector2 a, Vector2 b, float t)
```
```cs
Vector3 e.Lerp(Vector3 a, Vector3 b, float t)
```
```cs
Color e.Lerp(Color a, Color b, float t)
```

> Examples:
> 
> ```cs
> var f = e.Lerp(0, 10, 0.5f);
> ```
> ```cs
> var c = e.Lerp(Color.blue, Color.red, 0.5f);
> ```


<br>

#### LerpUnclamped

Interpolation between two value (`t` does not get clamped):

```cs
float e.LerpUnclamped(float a, float b, float t)
```
```cs
Vector2 e.LerpUnclamped(Vector2 a, Vector2 b, float t)
```
```cs
Vector3 e.LerpUnclamped(Vector3 a, Vector3 b, float t)
```
```cs
Color e.LerpUnclamped(Color a, Color b, float t)
```

> Examples:
> 
> ```cs
> var f = e.LerpUnclamped(0, 10, 1.5f);
> ```
> ```cs
> var v = e.LerpUnclamped(Vector3.zero, Vector3.up, 1.5f);
> ```


<br>

#### Sin

```cs
float e.Sin(float radian)
```
```cs
double e.Sin(double radian)
```

> Examples:
> 
> ```cs
> var s = e.Sin(180 * e.D2R);
> ```


<br>

#### Asin

```cs
float e.Asin(float value)
```
```cs
double e.Asin(double value)
```

> Examples:
> 
> ```cs
> var a = e.Asin(sine);
> ```


<br>

#### Cos

```cs
float e.Cos(float radian)
```
```cs
double e.Cos(double radian)
```

> Examples:
> 
> ```cs
> var c = e.Cos(90 * e.D2R);
> ```


<br>

#### Acos

```cs
float e.Acos(float value)
```
```cs
double e.Acos(double value)
```

> Examples:
> 
> ```cs
> var a = e.Acos(cosine);
> ```


<br>

#### Tan

```cs
float e.Tan(float radian)
```
```cs
double e.Tan(double radian)
```

> Examples:
> 
> ```cs
> var t = e.Tan(45 * e.D2R);
> ```


<br>

#### Atan

```cs
float e.Atan(float value)
```
```cs
double e.Atan(double value)
```

> Examples:
> 
> ```cs
> var a = e.Atan(tangent);
> ```


<br>

#### Pow

```cs
float e.Pow(float value, float power)
```
```cs
double e.Pow(double value, double power)
```

> Examples:
> 
> ```cs
> var v = e.Pow(2, 8);
> ```


<br>

#### Min

```cs
int e.Min(int a, int b)
```
```cs
int e.Min(params int[] values)
```
```cs
int e.Min(IEnumerable<int> source)
```
```cs
float e.Min(float a, float b)
```
```cs
float e.Min(params float[] values)
```
```cs
float e.Min(IEnumerable<float> source)
```

> Examples:
> 
> ```cs
> var m = e.Min(1, 2, 3); // m = 1
> ```


<br>

#### Max

```cs
int e.Max(int a, int b)
```
```cs
int e.Max(params int[] values)
```
```cs
int e.Max(IEnumerable<int> source)
```
```cs
float e.Max(float a, float b)
```
```cs
float e.Max(params float[] values)
```
```cs
float e.Max(IEnumerable<float> source)
```

> Examples:
> 
> ```cs
> var m = e.Max(1, 2, 3); // m = 3
> ```


<br>

#### Floor

```cs
int e.Floor(float value)
```
```cs
int e.Floor(double value)
```

> Examples:
> 
> ```cs
> var res = e.Floor(1.23f);
> ```


<br>

#### Ceiling

```cs
int e.Ceiling(float value)
```
```cs
int e.Ceiling(double value)
```

> Examples:
> 
> ```cs
> var res = e.Ceiling(1.23f);
> ```


<br>

#### Round

```cs
int e.Round(float value)
```
```cs
int e.Round(double value)
```

> Examples:
> 
> ```cs
> var res = e.Round(1.499f);
> ```


<br>

#### Sqrt (Square Root)

```cs
float e.Sqrt(float value)
```
```cs
double e.Sqrt(double value)
```

> Examples:
> 
> ```cs
> var res = e.Sqrt(16);
> ```


<br>

#### Sign

```cs
int e.Sign(int value)
```
```cs
int e.Sign(float value)
```
```cs
int e.Sign(double value)
```

> Examples:
> 
> ```cs
> // r == -1
> var r = e.Sign(-10);
> ```
> ```cs
> // r == 0
> var r = e.Sign(0);
> ```
> ```cs
> // r == 1
> var r = e.Sign(10);
> ```



<br>

## Timers

With timer api you call a method after a delay.

```cs
interface ITimer { }
```


<br>

#### Timeout

To call method after a delay use:

```cs
ITimer e.SetTimeout(GameObject host, Action callback, float delay)
```

To call method repeatedly after a sequential delays:

```cs
ITimer e.SetTimeout(GameObject host, Action callback, params float[] delays)
```

> Examples:
> 
> ```cs
> e.SetTimeout(gameObject, TimerCallback, 2);
>
> void TimerCallback() {...}
> ```
> ```cs
> e.SetTimeout(gameObject, TimerCallback, 1, 2, 3, 4, 5);
>
> void TimerCallback() {...}
> ```


<br>

#### Interval

To call method repeatedly with a delay between each call:

```cs
ITimer e.SetInterval(GameObject host, Action callback, float delay)
```

To call method repeatedly with a delay between each call for finite times:

```cs
ITimer e.SetInterval(GameObject host, Action callback, float delay, int repeatCount)
```

> Examples:
> 
> ```cs
> e.SetInterval(gameObject, IntervalCallback, 1);
>
> void IntervalCallback() {...}
> ```
> 
> ```cs
> e.SetInterval(gameObject, IntervalCallback, 1, 10);
>
> void IntervalCallback() {...}
> ```


<br>

#### Stop Timer

To stop the timer use:

```cs
void e.StopTimer(ITimer timer)
```

> Examples:
> 
> ```cs
> var timer = e.SetInterval(gameObject, IntervalCallback, 1f);
>
> e.StopTimer(timer);
> ```
